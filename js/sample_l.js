
// 데이터셋이 CSV 파일일 때(헤더가 한글일 때)
d3.tsv("https://raw.githubusercontent.com/dbaproject/d3.js/master/src/mydata.tsv", function(error, data){
	var dataSet = [];	// 데이터를 저장할 배열을 준비
	for(var i=0; i < data.length; i++){	// 데이터 줄 수만큼 반복
		dataSet.push(data[i].item1);	// 상품A의 레이블 데이터만 추출
	}
	// 그래프 그리기
	d3.select("#myGraph")
	  .selectAll("rect")	// rect 요소 지정
	  .data(dataSet)	// 데이터를 요소에 연결
	  .enter()	// 데이터 개수만큼 반복
	  .append("rect")	// 데이터 개수만큼 rect 요소가 추가됨
	  .attr("class", "bar")	// CSS 클래스를 지정
	  .attr("width", "0px")				// 최초 막대그래프의 넓이를 0px로 지정
	  .transition()							// 그래프 출력 시 애니메이션 효과 적용
	  .delay(function(d, i){
		return i * 500;					// 0.5초마다 그리도록 대기 시간을 설정
	       })
	  .duration(2500)					// 2.5초에 걸쳐 애니메이션화 함
	  .attr("width", function(d,i){	// 넓이를 지정. 두 번째의 파라미터에 함수를 지정
			return d;	// 데이터 값을 그대로 넓이로 반환
		})
	  .attr("height", 20)	// 높이를 지정
	  .attr("x", 0)	// X 좌표를 0으로 함
	  .attr("y", function(d, i){	// Y 좌표를 지정함
			return i * 25	// 표시 순서에 25를 곱해 위치를 계산
		})
})