const fs = require('fs');
const path = require('path');

// EOL 설정 (줄바꿈 문자)
const EOL = '\n';

// 제외할 파일 목록
const excludeFiles = ['BaseIcon.vue', 'CustomPagination.vue', 'TextRatingWrapper.vue', 'Drawer.vue', 'EtcIcon.vue'];

// 컴포넌트 폴더 경로 설정
const srcDir = path.resolve('./src/components');

// 디렉토리를 순회하면서 .vue 파일이 있는 곳마다 index.js 파일 생성
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
			componentDirs.push(fullPath); // 현재 디렉토리 추가
		}
	});

	return componentDirs; // 디렉토리 목록 반환
};

// 상위 폴더에 export 문 추가
const generateParentIndexFiles = componentDirs => {
	const parentIndexMap = new Map(); // 부모 디렉토리별 export 문 목록

	componentDirs.forEach(dir => {
		const files = fs.readdirSync(dir); // 현재 디렉토리의 파일 목록
		const indexFiles = files.filter(file => file === 'index.js'); // index.js 파일 목록

		if (indexFiles.length > 0) {
			// index.js 파일이 있는 경우
			const parentDir = path.dirname(dir); // 부모 디렉토리
			if (parentDir.startsWith(srcDir)) {
				// srcDir 하위의 디렉토리인 경우
				const absolutePath = path.join('@/components', path.relative(srcDir, dir)).replace(/\\/g, '/'); // 절대 경로
				const exportStatement = `export * from '${absolutePath}';`; // export 문 생성

				if (!parentIndexMap.has(parentDir)) {
					// 부모 디렉토리가 아직 없는 경우
					parentIndexMap.set(parentDir, new Set()); // 새로운 Set 생성
				}
				parentIndexMap.get(parentDir).add(exportStatement); // export 문 추가
			}
		}
	});

	parentIndexMap.forEach((exports, parentDir) => {
		// 부모 디렉토리별로 index.js 파일 생성
		const parentIndexPath = path.join(parentDir, 'index.js'); // index.js 파일 경로
		const content = Array.from(exports).join(EOL) + EOL; // 파일 내용 생성
		fs.writeFileSync(parentIndexPath, content, 'utf8'); // index.js 파일 쓰기
		console.log(`상위 index.js 파일이 생성되었습니다: ${parentIndexPath}`);
	});
};

// 실행
const componentDirs = generateIndexFiles(srcDir); // 컴포넌트 디렉토리 목록 생성
generateParentIndexFiles(componentDirs); // 상위 디렉토리의 index.js 파일 생성 및 갱신
