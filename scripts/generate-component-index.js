const fs = require('fs');
const path = require('path');

// EOL 설정 (줄바꿈 문자)
const EOL = '\n';

// 제외할 파일 목록
const excludeFiles = ['BaseIcon.vue', 'CustomPagination.vue', 'TextRatingWrapper.vue', 'Drawer.vue', 'EtcIcon.vue'];

// 컴포넌트 폴더 경로 설정
const srcDir = path.resolve('./src/components');

/**
 * 디렉토리를 순회하면서 .vue 파일이 있는 곳마다 index.js 파일 생성
 * @param {string} dir - 현재 디렉토리 경로
 * @returns {string[]} - index.js 파일이 있는 디렉토리 목록
 */
const generateIndexFiles = dir => {
	const files = fs.readdirSync(dir); // 현재 디렉토리의 파일 목록
	const vueFiles = files.filter(file => file.endsWith('.vue') && !excludeFiles.includes(file)); // .vue 파일 목록에서 제외 파일을 제외

	if (vueFiles.length > 0) {
		// .vue 파일이 있는 경우 index.js 파일 생성
		const imports = vueFiles
			.map(file => {
				const componentName = path.basename(file, '.vue'); // 컴포넌트 이름
				const relativePath = path.relative(srcDir, path.join(dir, file)); // srcDir 기준 상대 경로
				return `import ${componentName} from '@/components/${relativePath.replace(/\\/g, '/')}';`; // import 문 생성
			})
			.join(EOL);

		const exports = `export { ${vueFiles.map(file => path.basename(file, '.vue')).join(', ')} };`; // export 문 생성
		const indexContent = [imports, '', exports].join(EOL); // 파일 내용 생성
		const indexPath = path.join(dir, 'index.js'); // index.js 파일 경로

		fs.writeFileSync(indexPath, indexContent + EOL, 'utf8'); // index.js 파일 쓰기

		console.log(`index.js 파일이 생성되었습니다: ${indexPath}`);
	}

	let componentDirs = []; // 하위 디렉토리 목록

	files.forEach(file => {
		const fullPath = path.join(dir, file); // 파일의 전체 경로
		if (fs.statSync(fullPath).isDirectory()) {
			// 디렉토리인 경우
			componentDirs = componentDirs.concat(generateIndexFiles(fullPath)); // 재귀적으로 하위 디렉토리 처리
			if (fs.existsSync(path.join(fullPath, 'index.js'))) {
				componentDirs.push(fullPath); // index.js 파일이 있는 경우 현재 디렉토리 추가
			}
		}
	});

	return componentDirs; // 디렉토리 목록 반환
};

/**
 * /src/components/index.js 파일 생성 함수
 * @param {string[]} componentDirs - index.js 파일이 있는 컴포넌트 디렉토리 목록
 * @param {string} srcDir - 컴포넌트 폴더 경로
 */
const generateRootIndexFile = (componentDirs, srcDir) => {
	const rootIndexPath = path.join(srcDir, 'index.js'); // /src/components/index.js 파일 경로 설정
	const rootIndexContent = componentDirs
		.map(dir => {
			const relativeDir = path.relative(srcDir, dir).replace(/\\/g, '/'); // srcDir 기준 상대 경로
			return `import '@/components/${relativeDir}';`; // import 문 생성
		})
		.join(EOL);

	fs.writeFileSync(rootIndexPath, rootIndexContent + EOL, 'utf8'); // /src/components/index.js 파일 쓰기
	console.log(`/src/components/index.js 파일이 생성되었습니다: ${rootIndexPath}`);
};

const componentDirs = generateIndexFiles(srcDir); // 컴포넌트 디렉토리 목록 생성
generateRootIndexFile(componentDirs, srcDir); // /src/components/index.js 파일 생성
