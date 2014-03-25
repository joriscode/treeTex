/** @constructor */
ScalaJS.c.scala_beans_BeanDescription = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this);
  this.description$2 = null
});
ScalaJS.c.scala_beans_BeanDescription.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_beans_BeanDescription.prototype.constructor = ScalaJS.c.scala_beans_BeanDescription;
ScalaJS.c.scala_beans_BeanDescription.prototype.description__T = (function() {
  return this.description$2
});
ScalaJS.c.scala_beans_BeanDescription.prototype.init___T = (function(description) {
  this.description$2 = description;
  ScalaJS.c.scala_annotation_Annotation.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_beans_BeanDescription.prototype.description__ = (function() {
  return this.description__T()
});
/** @constructor */
ScalaJS.inheritable.scala_beans_BeanDescription = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_beans_BeanDescription.prototype = ScalaJS.c.scala_beans_BeanDescription.prototype;
ScalaJS.is.scala_beans_BeanDescription = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_beans_BeanDescription)))
});
ScalaJS.as.scala_beans_BeanDescription = (function(obj) {
  if ((ScalaJS.is.scala_beans_BeanDescription(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.beans.BeanDescription")
  }
});
ScalaJS.isArrayOf.scala_beans_BeanDescription = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_beans_BeanDescription)))
});
ScalaJS.asArrayOf.scala_beans_BeanDescription = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_beans_BeanDescription(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.beans.BeanDescription;", depth)
  }
});
ScalaJS.data.scala_beans_BeanDescription = new ScalaJS.ClassTypeData({
  scala_beans_BeanDescription: 0
}, false, "scala.beans.BeanDescription", ScalaJS.data.scala_annotation_Annotation, {
  scala_beans_BeanDescription: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_beans_BeanDescription.prototype.$classData = ScalaJS.data.scala_beans_BeanDescription;
//@ sourceMappingURL=BeanDescription.js.map
