ScalaJS.is.scala_App = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_App)))
});
ScalaJS.as.scala_App = (function(obj) {
  if ((ScalaJS.is.scala_App(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.App")
  }
});
ScalaJS.isArrayOf.scala_App = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_App)))
});
ScalaJS.asArrayOf.scala_App = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_App(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.App;", depth)
  }
});
ScalaJS.data.scala_App = new ScalaJS.ClassTypeData({
  scala_App: 0
}, true, "scala.App", undefined, {
  scala_App: 1,
  scala_DelayedInit: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=App.js.map
