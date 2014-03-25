ScalaJS.is.scala_sys_Prop = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_Prop)))
});
ScalaJS.as.scala_sys_Prop = (function(obj) {
  if ((ScalaJS.is.scala_sys_Prop(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.Prop")
  }
});
ScalaJS.isArrayOf.scala_sys_Prop = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_Prop)))
});
ScalaJS.asArrayOf.scala_sys_Prop = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_Prop(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.Prop;", depth)
  }
});
ScalaJS.data.scala_sys_Prop = new ScalaJS.ClassTypeData({
  scala_sys_Prop: 0
}, true, "scala.sys.Prop", undefined, {
  scala_sys_Prop: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Prop.js.map
