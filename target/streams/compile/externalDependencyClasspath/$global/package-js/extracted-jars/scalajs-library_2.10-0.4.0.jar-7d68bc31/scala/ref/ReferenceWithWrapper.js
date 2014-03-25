ScalaJS.is.scala_ref_ReferenceWithWrapper = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_ref_ReferenceWithWrapper)))
});
ScalaJS.as.scala_ref_ReferenceWithWrapper = (function(obj) {
  if ((ScalaJS.is.scala_ref_ReferenceWithWrapper(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.ref.ReferenceWithWrapper")
  }
});
ScalaJS.isArrayOf.scala_ref_ReferenceWithWrapper = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_ref_ReferenceWithWrapper)))
});
ScalaJS.asArrayOf.scala_ref_ReferenceWithWrapper = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_ref_ReferenceWithWrapper(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.ref.ReferenceWithWrapper;", depth)
  }
});
ScalaJS.data.scala_ref_ReferenceWithWrapper = new ScalaJS.ClassTypeData({
  scala_ref_ReferenceWithWrapper: 0
}, true, "scala.ref.ReferenceWithWrapper", undefined, {
  scala_ref_ReferenceWithWrapper: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=ReferenceWithWrapper.js.map
