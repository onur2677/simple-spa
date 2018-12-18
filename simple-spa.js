var SimpleSPA = (function () {
  var _state = null
  var _pages = {}

  /**
 *
 * @param {Object} parameters
 * @param {String} parameters.id
 * @param {Function} parameters.create
 * @param {Function} parameters.destroy
 */
  function Page (parameters) {
    this.id = parameters.id
    _pages[parameters.id] = {
      create: parameters.create,
      destroy: parameters.destroy
    }
  }

  Page.prototype.remove = function () {
    delete _pages[this.id]
    return _pages
  }

  window.onhashchange = function () {
    if (_state) {
      _state.destroy()
    }
    var values = window.location.hash.split('?')
    var id = values[0]
    if (!_pages[id]) {
      throw new Error('Page Error')
    }
    values.shift()
    var parameters = values[0] && JSON.parse(decodeURIComponent(values[0]))
    _pages[id].parameters = parameters
    _state = _pages[id]
    _state.id = id
    _state.create()
  }

  return Page
})()
Object.freeze(SimpleSPA)
