/** @constructor */
ScalaJS.c.scala_beans_BeanDisplayName = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this);
  this.name$2 = null
});
ScalaJS.c.scala_beans_BeanDisplayName.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_beans_BeanDisplayName.prototype.constructor = ScalaJS.c.scala_beans_BeanDisplayName;
ScalaJS.c.scala_beans_BeanDisplayName.prototype.name__T = (function() {
  return this.name$2
});
ScalaJS.c.scala_beans_BeanDisplayName.prototype.init___T = (function(name) {
  this.name$2 = name;
  ScalaJS.c.scala_annotation_Annotation.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_beans_BeanDisplayName.prototype.name__ = (function() {
  return this.name__T()
});
/** @constructor */
ScalaJS.inheritable.scala_beans_BeanDisplayName = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_beans_BeanDisplayName.prototype = ScalaJS.c.scala_beans_BeanDisplayName.prototype;
ScalaJS.is.scala_beans_BeanDisplayName = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_beans_BeanDisplayName)))
});
ScalaJS.as.scala_beans_BeanDisplayName = (function(obj) {
  if ((ScalaJS.is.scala_beans_BeanDisplayName(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.beans.BeanDisplayName")
  }
});
ScalaJS.isArrayOf.scala_beans_BeanDisplayName = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_beans_BeanDisplayName)))
});
ScalaJS.asArrayOf.scala_beans_BeanDisplayName = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_beans_BeanDisplayName(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.beans.BeanDisplayName;", depth)
  }
});
ScalaJS.data.scala_beans_BeanDisplayName = new ScalaJS.ClassTypeData({
  scala_beans_BeanDisplayName: 0
}, false, "scala.beans.BeanDisplayName", ScalaJS.data.scala_annotation_Annotation, {
  scala_beans_BeanDisplayName: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_beans_BeanDisplayName.prototype.$classData = ScalaJS.data.scala_beans_BeanDisplayName;
//@ sourceMappingURL=BeanDisplayName.js.map
