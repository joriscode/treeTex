/** @constructor */
ScalaJS.c.scala_scalajs_test_TestOutputBridge$$anon$1 = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge$$anon$1.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_scalajs_test_TestOutputBridge$$anon$1.prototype.constructor = ScalaJS.c.scala_scalajs_test_TestOutputBridge$$anon$1;
ScalaJS.c.scala_scalajs_test_TestOutputBridge$$anon$1.prototype.info__T__V = (function(message$11) {
  this.$$outer$1.scala$scalajs$test$TestOutputBridge$$eventProxy$f["info"](message$11)
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge$$anon$1.prototype.error__T__V = (function(message) {
  this.$$outer$1.scala$scalajs$test$TestOutputBridge$$eventProxy$f["error"](message)
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge$$anon$1.prototype.init___Lscala_scalajs_test_TestOutputBridge = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge$$anon$1.prototype.error__T__ = (function(message) {
  return ScalaJS.bV(this.error__T__V(message))
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge$$anon$1.prototype.info__T__ = (function(message$2) {
  return ScalaJS.bV(this.info__T__V(message$2))
});
/** @constructor */
ScalaJS.inheritable.scala_scalajs_test_TestOutputBridge$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_scalajs_test_TestOutputBridge$$anon$1.prototype = ScalaJS.c.scala_scalajs_test_TestOutputBridge$$anon$1.prototype;
ScalaJS.is.scala_scalajs_test_TestOutputBridge$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_test_TestOutputBridge$$anon$1)))
});
ScalaJS.as.scala_scalajs_test_TestOutputBridge$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_test_TestOutputBridge$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.test.TestOutputBridge$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_scalajs_test_TestOutputBridge$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_test_TestOutputBridge$$anon$1)))
});
ScalaJS.asArrayOf.scala_scalajs_test_TestOutputBridge$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_test_TestOutputBridge$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.test.TestOutputBridge$$anon$1;", depth)
  }
});
ScalaJS.data.scala_scalajs_test_TestOutputBridge$$anon$1 = new ScalaJS.ClassTypeData({
  scala_scalajs_test_TestOutputBridge$$anon$1: 0
}, false, "scala.scalajs.test.TestOutputBridge$$anon$1", ScalaJS.data.java_lang_Object, {
  scala_scalajs_test_TestOutputBridge$$anon$1: 1,
  scala_scalajs_test_TestOutputLog: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_scalajs_test_TestOutputBridge$$anon$1.prototype.$classData = ScalaJS.data.scala_scalajs_test_TestOutputBridge$$anon$1;
//@ sourceMappingURL=TestOutputBridge$$anon$1.js.map
