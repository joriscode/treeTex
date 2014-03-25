/** @constructor */
ScalaJS.c.scala_Predef$$anon$1 = (function() {
  ScalaJS.c.scala_Predef$$less$colon$less.call(this)
});
ScalaJS.c.scala_Predef$$anon$1.prototype = new ScalaJS.inheritable.scala_Predef$$less$colon$less();
ScalaJS.c.scala_Predef$$anon$1.prototype.constructor = ScalaJS.c.scala_Predef$$anon$1;
ScalaJS.c.scala_Predef$$anon$1.prototype.apply__O__O = (function(x) {
  return x
});
/** @constructor */
ScalaJS.inheritable.scala_Predef$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Predef$$anon$1.prototype = ScalaJS.c.scala_Predef$$anon$1.prototype;
ScalaJS.is.scala_Predef$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Predef$$anon$1)))
});
ScalaJS.as.scala_Predef$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_Predef$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Predef$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_Predef$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Predef$$anon$1)))
});
ScalaJS.asArrayOf.scala_Predef$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Predef$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Predef$$anon$1;", depth)
  }
});
ScalaJS.data.scala_Predef$$anon$1 = new ScalaJS.ClassTypeData({
  scala_Predef$$anon$1: 0
}, false, "scala.Predef$$anon$1", ScalaJS.data.scala_Predef$$less$colon$less, {
  scala_Predef$$anon$1: 1,
  scala_Predef$$less$colon$less: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Predef$$anon$1.prototype.$classData = ScalaJS.data.scala_Predef$$anon$1;
//@ sourceMappingURL=Predef$$anon$1.js.map
