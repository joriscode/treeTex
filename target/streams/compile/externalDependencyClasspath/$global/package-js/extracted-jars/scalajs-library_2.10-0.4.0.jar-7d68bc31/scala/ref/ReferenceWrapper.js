ScalaJS.is.scala_ref_ReferenceWrapper = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_ref_ReferenceWrapper)))
});
ScalaJS.as.scala_ref_ReferenceWrapper = (function(obj) {
  if ((ScalaJS.is.scala_ref_ReferenceWrapper(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.ref.ReferenceWrapper")
  }
});
ScalaJS.isArrayOf.scala_ref_ReferenceWrapper = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_ref_ReferenceWrapper)))
});
ScalaJS.asArrayOf.scala_ref_ReferenceWrapper = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_ref_ReferenceWrapper(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.ref.ReferenceWrapper;", depth)
  }
});
ScalaJS.data.scala_ref_ReferenceWrapper = new ScalaJS.ClassTypeData({
  scala_ref_ReferenceWrapper: 0
}, true, "scala.ref.ReferenceWrapper", undefined, {
  scala_ref_ReferenceWrapper: 1,
  scala_Proxy: 1,
  scala_ref_Reference: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=ReferenceWrapper.js.map
