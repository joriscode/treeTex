ScalaJS.is.scala_DelayedInit = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_DelayedInit)))
});
ScalaJS.as.scala_DelayedInit = (function(obj) {
  if ((ScalaJS.is.scala_DelayedInit(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.DelayedInit")
  }
});
ScalaJS.isArrayOf.scala_DelayedInit = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_DelayedInit)))
});
ScalaJS.asArrayOf.scala_DelayedInit = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_DelayedInit(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.DelayedInit;", depth)
  }
});
ScalaJS.data.scala_DelayedInit = new ScalaJS.ClassTypeData({
  scala_DelayedInit: 0
}, true, "scala.DelayedInit", undefined, {
  scala_DelayedInit: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=DelayedInit.js.map
