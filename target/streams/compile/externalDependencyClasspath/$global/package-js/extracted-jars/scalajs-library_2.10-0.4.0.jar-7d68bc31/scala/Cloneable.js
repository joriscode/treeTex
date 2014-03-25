ScalaJS.is.scala_Cloneable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Cloneable)))
});
ScalaJS.as.scala_Cloneable = (function(obj) {
  if ((ScalaJS.is.scala_Cloneable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Cloneable")
  }
});
ScalaJS.isArrayOf.scala_Cloneable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Cloneable)))
});
ScalaJS.asArrayOf.scala_Cloneable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Cloneable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Cloneable;", depth)
  }
});
ScalaJS.data.scala_Cloneable = new ScalaJS.ClassTypeData({
  scala_Cloneable: 0
}, true, "scala.Cloneable", undefined, {
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Cloneable.js.map
