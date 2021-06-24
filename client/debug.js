let gw = () => {
	console.log(`innerWidth = ${window.innerWidth}`)
	console.log(`innerHeight = ${window.innerHeight}`)
	console.log(`pageYOffset = ${window.pageYOffset}`)
	console.log(`pageXOffset = ${window.pageXOffset}`)

}

let projects = ['project1','project2','project3','project4']

let ps = () => {
	var a = 1
}

let m = () => {
  let p1 = document.getElementById('project1')
  let p2 = document.getElementById('project2')
  let p3 = document.getElementById('project3')
  let p4 = document.getElementById('project4')

  let p1_bcr = p1.getBoundingClientRect()
  let p2_bcr = p2.getBoundingClientRect()
  let p3_bcr = p3.getBoundingClientRect()
  let p4_bcr = p4.getBoundingClientRect()

  console.log('%cproject1', "color: green")
  console.log(`height=${p1_bcr.height}`)
  console.log(`width=${p1_bcr.width}`)

  console.log('%cproject2', "color: green")
  console.log(`height=${p2_bcr.height}`)
  console.log(`width=${p2_bcr.width}`)


}

