// just another doodle
// an object for chained loops
var Loop = (function () {
    var _Loop = function () {
        return this;
    };
    
    _Loop.prototype.from = function (start) {
        this._start = start;
        return this;
    };
    
    _Loop.prototype.to = function (stop) {
        this._stop = stop;
        return this;
    };
    
    _Loop.prototype.step = function (steps) {
        this._steps = steps;
        return this;
    };
    
    _Loop.prototype.forEach = function () {
        this._forEach = true;
        return this;
    };
    
    _Loop.prototype.in = function (items) {
        this._items = items;
        return this;
    };
    
    _Loop.prototype.reset = function () {
        this._forEach = false;
        this._items = null;
        this._start = this._stop = 0;
        this._steps = 1;
        return this;
    };
    
    _Loop.prototype.do = function (callback) {
        var i = 0, 
            start = this._start || 0, 
            stop = this._stop || 0,
            steps = Math.abs(this._steps || 1),
            items = this._items || [];
            
        if (typeof callback === 'function') {
            if (this._forEach && items && typeof items === 'object') {
                if (Array.isArray(items)) {
                    for (var item in items) {
                        callback(i++, items[item]);
                    }
                }
                else {
                    for (var item in items) {
                        callback(item, items[item]);
                    }
                }
            }
            else {
                if (start < stop) {
                    for (i = start; i <= stop; i += steps) {
                        callback(i);
                    }
                }
                else {
                    for (var i = start; i >= stop; i -= steps) {
                        callback(i);
                    }
                }
            }
        }
        
        this.reset();
        
        return this;
    };

    return _Loop;
})();

(new Loop())
    // loop from 1 to 10
    .from(1).to(10).do(function (i) {
        console.log(i);
    })
    // loop from 10 to 1
    .from(10).to(1).do(function (i) {
        console.log(i);
    })
    // loop to 10 from 0
    .to(10).from(0).do(function (i) {
        console.log(i);
    })
    // loop to 0 from 10
    .to(0).from(10).do(function (i) {
        console.log(i);
    });
    
(new Loop())
    // loop from 0 to 100 step 5
    .from(0).to(100).step(5).do(function (i) {
        console.log(i);
    })
    // loop from 100 to 0 step -5
    .from(100).to(0).step(-5).do(function (i) {
        console.log(i);
    });
    
(new Loop())
    // loop for each in [10, 20, 30]
    .forEach().in([10, 20, 30]).do(function (index, value) {
        console.log(index, value);
    });
    
(new Loop())
    // loop for each in { a: 13, b: 22, c: 31 }
    .forEach().in({ a: 13, b: 22, c: 31 }).do(function (key, value) {
        console.log(key, value);
    });
