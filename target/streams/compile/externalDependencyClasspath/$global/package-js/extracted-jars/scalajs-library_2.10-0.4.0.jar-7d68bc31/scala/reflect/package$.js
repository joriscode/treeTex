/** @constructor */
ScalaJS.c.scala_reflect_package$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.ClassManifest$1 = null;
  this.Manifest$1 = null
});
ScalaJS.c.scala_reflect_package$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_reflect_package$.prototype.constructor = ScalaJS.c.scala_reflect_package$;
ScalaJS.c.scala_reflect_package$.prototype.ClassManifest__Lscala_reflect_ClassManifestFactory$ = (function() {
  return this.ClassManifest$1
});
ScalaJS.c.scala_reflect_package$.prototype.Manifest__Lscala_reflect_ManifestFactory$ = (function() {
  return this.Manifest$1
});
ScalaJS.c.scala_reflect_package$.prototype.classTag__Lscala_reflect_ClassTag__Lscala_reflect_ClassTag = (function(ctag) {
  return ctag
});
ScalaJS.c.scala_reflect_package$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_reflect_package = this;
  this.ClassManifest$1 = ScalaJS.modules.scala_reflect_ClassManifestFactory();
  this.Manifest$1 = ScalaJS.modules.scala_reflect_ManifestFactory();
  return this
});
ScalaJS.c.scala_reflect_package$.prototype.classTag__Lscala_reflect_ClassTag__ = (function(ctag) {
  return this.classTag__Lscala_reflect_ClassTag__Lscala_reflect_ClassTag(ctag)
});
ScalaJS.c.scala_reflect_package$.prototype.Manifest__ = (function() {
  return this.Manifest__Lscala_reflect_ManifestFactory$()
});
ScalaJS.c.scala_reflect_package$.prototype.ClassManifest__ = (function() {
  return this.ClassManifest__Lscala_reflect_ClassManifestFactory$()
});
/** @constructor */
ScalaJS.inheritable.scala_reflect_package$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_reflect_package$.prototype = ScalaJS.c.scala_reflect_package$.prototype;
ScalaJS.is.scala_reflect_package$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_reflect_package$)))
});
ScalaJS.as.scala_reflect_package$ = (function(obj) {
  if ((ScalaJS.is.scala_reflect_package$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.reflect.package")
  }
});
ScalaJS.isArrayOf.scala_reflect_package$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_reflect_package$)))
});
ScalaJS.asArrayOf.scala_reflect_package$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_reflect_package$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.reflect.package;", depth)
  }
});
ScalaJS.data.scala_reflect_package$ = new ScalaJS.ClassTypeData({
  scala_reflect_package$: 0
}, false, "scala.reflect.package$", ScalaJS.data.java_lang_Object, {
  scala_reflect_package$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_reflect_package$.prototype.$classData = ScalaJS.data.scala_reflect_package$;
ScalaJS.moduleInstances.scala_reflect_package = undefined;
ScalaJS.modules.scala_reflect_package = (function() {
  if ((!ScalaJS.moduleInstances.scala_reflect_package)) {
    ScalaJS.moduleInstances.scala_reflect_package = new ScalaJS.c.scala_reflect_package$().init___()
  };
  return ScalaJS.moduleInstances.scala_reflect_package
});
//@ sourceMappingURL=package$.js.map
