/** @constructor */
ScalaJS.c.scala_annotation_migration = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_annotation_migration.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_annotation_migration.prototype.constructor = ScalaJS.c.scala_annotation_migration;
ScalaJS.c.scala_annotation_migration.prototype.init___T__T = (function(message, changedIn) {
  ScalaJS.c.scala_annotation_Annotation.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_annotation_migration.prototype.init___I__I__T = (function(majorVersion, minorVersion, message) {
  ScalaJS.c.scala_annotation_migration.prototype.init___T__T.call(this, message, (("" + (ScalaJS.bI(majorVersion) + ".")) + ScalaJS.bI(minorVersion)));
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_annotation_migration = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_annotation_migration.prototype = ScalaJS.c.scala_annotation_migration.prototype;
ScalaJS.is.scala_annotation_migration = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_migration)))
});
ScalaJS.as.scala_annotation_migration = (function(obj) {
  if ((ScalaJS.is.scala_annotation_migration(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.migration")
  }
});
ScalaJS.isArrayOf.scala_annotation_migration = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_migration)))
});
ScalaJS.asArrayOf.scala_annotation_migration = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_migration(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.migration;", depth)
  }
});
ScalaJS.data.scala_annotation_migration = new ScalaJS.ClassTypeData({
  scala_annotation_migration: 0
}, false, "scala.annotation.migration", ScalaJS.data.scala_annotation_Annotation, {
  scala_annotation_migration: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_annotation_migration.prototype.$classData = ScalaJS.data.scala_annotation_migration;
//@ sourceMappingURL=migration.js.map
