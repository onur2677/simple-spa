var content = document.getElementById('content')

function create () {
  console.log('Created ', this.id, this.parameters)
  content.textContent = (this.parameters && this.parameters.message) || this.id
}

function destroy () {
  console.log('Destroyed ', this.id, this.parameters)
  content.textContent = null
}

var pages = {}

pages.page1 = new window.SimpleSPA({
  id: '#page1',
  create: create,
  destroy: destroy
})

pages.page2 = new window.SimpleSPA({
  id: '#page2',
  create: create,
  destroy: destroy
})
