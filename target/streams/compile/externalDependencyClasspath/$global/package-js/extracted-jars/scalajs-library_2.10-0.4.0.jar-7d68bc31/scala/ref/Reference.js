ScalaJS.is.scala_ref_Reference = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_ref_Reference)))
});
ScalaJS.as.scala_ref_Reference = (function(obj) {
  if ((ScalaJS.is.scala_ref_Reference(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.ref.Reference")
  }
});
ScalaJS.isArrayOf.scala_ref_Reference = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_ref_Reference)))
});
ScalaJS.asArrayOf.scala_ref_Reference = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_ref_Reference(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.ref.Reference;", depth)
  }
});
ScalaJS.data.scala_ref_Reference = new ScalaJS.ClassTypeData({
  scala_ref_Reference: 0
}, true, "scala.ref.Reference", undefined, {
  scala_ref_Reference: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Reference.js.map
