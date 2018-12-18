# SimpleSPA

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

With SimpleSPA you can create simple and useful single page applications !

## Descriptions

* SimpleSPA uses ```window.location.hash``` data for routing pages.For example; 

    * HTML
        ```html
            <a href='#page1?{"message":"Hello Page1"}'>Page 1</a>
            <a href='#page2'>Page 2</a>
        ```
    * JS
        ```js
            function create() {
                console.log('Created ', this.id, this.parameters)
            }

            function destroy() {
                console.log('Destroyed ', this.id, this.parameters)
            }

            var page1 = new window.SimpleSPA({
                id: '#page1',
                create: create,
                destroy: destroy
            })

            var page2 = new window.SimpleSPA({
                id: '#page2',
                create: create,
                destroy: destroy
            })
        ```

## API :)
* Constructor : needs ```parameter``` object for creating pages.
    *  ```parameter``` object
    ```js
        {
            id: '#page1',
            create: function () {},
            destroy: function () {}
        }
    ```
* .remove() :  For removing page
    ```js
        page1.remove()
    ```