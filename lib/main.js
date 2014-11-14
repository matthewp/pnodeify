var slice = Array.prototype.slice;

module.exports = function(promiseMaker) {
  return function() {
    var args = slice.call(arguments);
    var callback = args.pop();

    var success = function(result) {
      callback(null, result);
    };

    var failure = function(error) {
      callback(error);
    };

    promiseMaker.apply(this, args)
      .then(success, failure);
  };
};
