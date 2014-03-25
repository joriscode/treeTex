ScalaJS.is.scala_testing_Show = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_testing_Show)))
});
ScalaJS.as.scala_testing_Show = (function(obj) {
  if ((ScalaJS.is.scala_testing_Show(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.testing.Show")
  }
});
ScalaJS.isArrayOf.scala_testing_Show = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_testing_Show)))
});
ScalaJS.asArrayOf.scala_testing_Show = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_testing_Show(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.testing.Show;", depth)
  }
});
ScalaJS.data.scala_testing_Show = new ScalaJS.ClassTypeData({
  scala_testing_Show: 0
}, true, "scala.testing.Show", undefined, {
  scala_testing_Show: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Show.js.map
