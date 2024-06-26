const fs = require('fs');
const path = require('path');

const NEW_LINE = '\n';

// 제외할 파일 목록
const excludeFiles = ['BaseIcon.vue', 'CustomPagination.vue', 'TextRatingWrapper.vue', 'Drawer.vue', 'EtcIcon.vue'];

// 컴포넌트 폴더 경로 설정
const srcDir = path.resolve('./src/components');

// index.js 파일 경로
const outputPath = path.join(srcDir, 'index.js');

// 함수: .vue 파일을 찾고, index.js 파일을 생성
function generateIndexJs(dir) {
	let importStatements = '';
	let exportStatements = 'export {' + NEW_LINE;

	// 재귀적으로 디렉토리를 탐색하여 .vue 파일을 찾음
	function traverseDirectory(currentDir) {
		const files = fs.readdirSync(currentDir);

		files.forEach(file => {
			const filePath = path.join(currentDir, file);
			const fileStat = fs.statSync(filePath);

			if (fileStat.isDirectory()) {
				traverseDirectory(filePath);
			} else if (path.extname(file) === '.vue' && !excludeFiles.includes(file)) {
				const componentName = path.basename(file, '.vue');
				const relativePath = path.relative(dir, filePath).replace(/\\/g, '/');

				importStatements += `import ${componentName} from './${relativePath}';${NEW_LINE}`;
				exportStatements += `	${componentName},${NEW_LINE}`;
			}
		});
	}

	traverseDirectory(dir);

	exportStatements += '};' + NEW_LINE;

	const fileContent = importStatements + NEW_LINE + exportStatements;
	fs.writeFileSync(outputPath, fileContent, 'utf8');
	console.log(`index.js 파일이 생성되었습니다: ${outputPath}`);
}

// index.js 파일 생성 실행
generateIndexJs(srcDir);
