
import * as d3 from 'd3'
import { useEffect,useRef } from 'react'
const Test = () => {
    const svgRef = useRef(null)
    useEffect(() => {
        const countNumber = 13
        const svg = d3.select(svgRef.current)
       const {width,height}= svg.node().getBoundingClientRect() 
       const curveGenerator = () =>
       d3
       .line()
       .x((d) => d.x)
       .y((d) => d.y)
       .curve(d3.curveCardinal)
       // Define your curve data
       const drawCurve = (curveData, bg, color, x2, y2, id) => {
           svg
           .append('pattern')
           .attr('id', id)
           .attr('width', 4) // Adjust the width of each stripe
           .attr('height', 4) // Adjust the height of each stripe
           .attr('patternUnits', 'userSpaceOnUse')
           .append('line')
           .attr('x1', 0)
           .attr('y1', 0)
           .attr('x2', x2)
           .attr('y2', y2) // Adjust the length of each stripe
           .attr('stroke', bg) // Stripe color
           .attr('stroke-width', 1) // Strip
		svg
        .append('path')
        .datum(curveData)
        .transition()
        .duration(3000)
        .ease(d3.easeBounceInOut)
        .attr('fill', `url(#${id})`)
        .attr('stroke', color)
        .attr('stroke-width', 2)
        .attr('d', curveGenerator()) // Call the curveGenerator function here
        .attr('opacity', 1)
	}
	const createKromozom = (count, firstWidth, secondWidth, spaceWidth) => {
		const curveData = []
		for (let i = 0; i <= count; i++) {
			if (i > count / 2) {
                const x =
                i === count / 2 + 1
                ? spaceWidth
						: i === count
						? spaceWidth
						: i % 2 === 0
						? secondWidth
						: firstWidth
                        const y =
                        width / 21 +
                        (count / 2) * (width / 44) -
                        (i - count / 2) * (width / 44)
                        curveData.push({ x, y })
                    } else {
                        const x =
                        i === count / 2
						? spaceWidth
						: i === 0
						? spaceWidth
						: i % 2 === 0
						? firstWidth
						: secondWidth
                        const y =
                        i === count / 2
						? width / 24 + (i - 1) * (width / 44)
						: width / 21 + i * (width / 44)
                        curveData.push({ x, y })
                    }
                }
                drawCurve(curveData, 'darkblue', '#013778', 4, 0, 'vertical')
            }
            
            const createKromozomHorizontal = (
                count,
                firstWidth,
                secondWidth,
                spaceWidth
                ) => {
                    const curveDataHorizontal = []
                    for (let i = 0; i <= count; i++) {
                        if (i > count / 2) {
                            const x =
                            width / 44 +
                            (count / 2) * (width / 44) -
                            (i - count / 2) * (width / 44)
                            const y =
                            i === count / 2 + 1
                            ? spaceWidth
                            : i === count
                            ? spaceWidth
                            : i % 2 === 0
                            ? secondWidth
						: firstWidth
                        curveDataHorizontal.push({ x, y })
                    } else {
                        const x =
                        i === count / 2
						? width / 44 + (i - 1) * (width / 44.4)
						: width / 44 + i * (width / 44)
                        const y =
                        i === count / 2
						? spaceWidth
						: i === 0
						? spaceWidth
						: i % 2 === 0
						? firstWidth
						: secondWidth
                        curveDataHorizontal.push({ x, y })
                    }
                }
                drawCurve(curveDataHorizontal,  '#016a78','#016a78', 0, 4, 'horizontal')
            }
            const createDNA = () => {
                for (let i = 0; i < 6; i++) {
                    const space = (8 * i * width) / 44
                    createKromozom(
                        countNumber * 8,
                        width / 17.8 + space ,
                        width / 12.8 + space,
                        width / 14.8 + space
                        )
                        createKromozom(
                            countNumber * 8,
                            width / 17.4 + space,
                            width / 12.6 + space,
                            width / 14.8 + space
                            )
                        }
                        for (let i = 0; i < countNumber + 2; i++) {
                            const space = (4 * i * width) / 44
                            createKromozomHorizontal(
                                88,
                                width / 12.5 + space  ,
                                width / 9.8 + space ,
                                width / 11 + space 
			)
			createKromozomHorizontal(
                88,
				width / 12 + space ,
				width / 9.5 + space ,
				width / 11 + space 
                )
            }
        }
        createDNA()
    },[])
    
    return (
        <>
        <svg ref={svgRef} width={'100vw'} height={'100vh'}/>
        </>
)
}
    export default Test