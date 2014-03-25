/** @constructor */
ScalaJS.c.scala_Predef$$anon$2 = (function() {
  ScalaJS.c.scala_Predef$$eq$colon$eq.call(this)
});
ScalaJS.c.scala_Predef$$anon$2.prototype = new ScalaJS.inheritable.scala_Predef$$eq$colon$eq();
ScalaJS.c.scala_Predef$$anon$2.prototype.constructor = ScalaJS.c.scala_Predef$$anon$2;
ScalaJS.c.scala_Predef$$anon$2.prototype.apply__O__O = (function(x) {
  return x
});
/** @constructor */
ScalaJS.inheritable.scala_Predef$$anon$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Predef$$anon$2.prototype = ScalaJS.c.scala_Predef$$anon$2.prototype;
ScalaJS.is.scala_Predef$$anon$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Predef$$anon$2)))
});
ScalaJS.as.scala_Predef$$anon$2 = (function(obj) {
  if ((ScalaJS.is.scala_Predef$$anon$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Predef$$anon$2")
  }
});
ScalaJS.isArrayOf.scala_Predef$$anon$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Predef$$anon$2)))
});
ScalaJS.asArrayOf.scala_Predef$$anon$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Predef$$anon$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Predef$$anon$2;", depth)
  }
});
ScalaJS.data.scala_Predef$$anon$2 = new ScalaJS.ClassTypeData({
  scala_Predef$$anon$2: 0
}, false, "scala.Predef$$anon$2", ScalaJS.data.scala_Predef$$eq$colon$eq, {
  scala_Predef$$anon$2: 1,
  scala_Predef$$eq$colon$eq: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Predef$$anon$2.prototype.$classData = ScalaJS.data.scala_Predef$$anon$2;
//@ sourceMappingURL=Predef$$anon$2.js.map
