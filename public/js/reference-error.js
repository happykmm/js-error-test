(function() {

    function foo() {
        bar();
    }

    function bar() {
        execute();
    }

    function execute() {
        noSuchVariable();
    }

    foo();
})();