/** @constructor */
ScalaJS.c.scala_Specializable$Group = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Specializable$Group.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Specializable$Group.prototype.constructor = ScalaJS.c.scala_Specializable$Group;
ScalaJS.c.scala_Specializable$Group.prototype.init___O = (function(value) {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_Specializable$Group = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Specializable$Group.prototype = ScalaJS.c.scala_Specializable$Group.prototype;
ScalaJS.is.scala_Specializable$Group = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Specializable$Group)))
});
ScalaJS.as.scala_Specializable$Group = (function(obj) {
  if ((ScalaJS.is.scala_Specializable$Group(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Specializable$Group")
  }
});
ScalaJS.isArrayOf.scala_Specializable$Group = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Specializable$Group)))
});
ScalaJS.asArrayOf.scala_Specializable$Group = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Specializable$Group(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Specializable$Group;", depth)
  }
});
ScalaJS.data.scala_Specializable$Group = new ScalaJS.ClassTypeData({
  scala_Specializable$Group: 0
}, false, "scala.Specializable$Group", ScalaJS.data.java_lang_Object, {
  scala_Specializable$Group: 1,
  scala_Specializable$SpecializedGroup: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Specializable$Group.prototype.$classData = ScalaJS.data.scala_Specializable$Group;
//@ sourceMappingURL=Specializable$Group.js.map
