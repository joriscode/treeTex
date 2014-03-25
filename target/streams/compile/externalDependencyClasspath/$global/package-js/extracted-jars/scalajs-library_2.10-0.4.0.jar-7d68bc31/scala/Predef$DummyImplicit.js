/** @constructor */
ScalaJS.c.scala_Predef$DummyImplicit = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Predef$DummyImplicit.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Predef$DummyImplicit.prototype.constructor = ScalaJS.c.scala_Predef$DummyImplicit;
/** @constructor */
ScalaJS.inheritable.scala_Predef$DummyImplicit = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Predef$DummyImplicit.prototype = ScalaJS.c.scala_Predef$DummyImplicit.prototype;
ScalaJS.is.scala_Predef$DummyImplicit = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Predef$DummyImplicit)))
});
ScalaJS.as.scala_Predef$DummyImplicit = (function(obj) {
  if ((ScalaJS.is.scala_Predef$DummyImplicit(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Predef$DummyImplicit")
  }
});
ScalaJS.isArrayOf.scala_Predef$DummyImplicit = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Predef$DummyImplicit)))
});
ScalaJS.asArrayOf.scala_Predef$DummyImplicit = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Predef$DummyImplicit(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Predef$DummyImplicit;", depth)
  }
});
ScalaJS.data.scala_Predef$DummyImplicit = new ScalaJS.ClassTypeData({
  scala_Predef$DummyImplicit: 0
}, false, "scala.Predef$DummyImplicit", ScalaJS.data.java_lang_Object, {
  scala_Predef$DummyImplicit: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Predef$DummyImplicit.prototype.$classData = ScalaJS.data.scala_Predef$DummyImplicit;
//@ sourceMappingURL=Predef$DummyImplicit.js.map
