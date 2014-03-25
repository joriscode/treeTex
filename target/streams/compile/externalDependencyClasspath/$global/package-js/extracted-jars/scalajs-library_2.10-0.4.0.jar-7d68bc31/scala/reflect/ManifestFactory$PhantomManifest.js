/** @constructor */
ScalaJS.c.scala_reflect_ManifestFactory$PhantomManifest = (function() {
  ScalaJS.c.scala_reflect_ManifestFactory$ClassTypeManifest.call(this);
  this.toString$2 = null;
  this.hashCode$2 = 0
});
ScalaJS.c.scala_reflect_ManifestFactory$PhantomManifest.prototype = new ScalaJS.inheritable.scala_reflect_ManifestFactory$ClassTypeManifest();
ScalaJS.c.scala_reflect_ManifestFactory$PhantomManifest.prototype.constructor = ScalaJS.c.scala_reflect_ManifestFactory$PhantomManifest;
ScalaJS.c.scala_reflect_ManifestFactory$PhantomManifest.prototype.toString__T = (function() {
  return this.toString$2
});
ScalaJS.c.scala_reflect_ManifestFactory$PhantomManifest.prototype.equals__O__Z = (function(that) {
  return (this === that)
});
ScalaJS.c.scala_reflect_ManifestFactory$PhantomManifest.prototype.hashCode__I = (function() {
  return this.hashCode$2
});
ScalaJS.c.scala_reflect_ManifestFactory$PhantomManifest.prototype.init___Ljava_lang_Class__T = (function(_runtimeClass, toString) {
  this.toString$2 = toString;
  ScalaJS.c.scala_reflect_ManifestFactory$ClassTypeManifest.prototype.init___Lscala_Option__Ljava_lang_Class__Lscala_collection_immutable_List.call(this, ScalaJS.modules.scala_None(), _runtimeClass, ScalaJS.modules.scala_collection_immutable_Nil());
  this.hashCode$2 = ScalaJS.modules.java_lang_System().identityHashCode__O__I(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_reflect_ManifestFactory$PhantomManifest = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_reflect_ManifestFactory$PhantomManifest.prototype = ScalaJS.c.scala_reflect_ManifestFactory$PhantomManifest.prototype;
ScalaJS.is.scala_reflect_ManifestFactory$PhantomManifest = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_reflect_ManifestFactory$PhantomManifest)))
});
ScalaJS.as.scala_reflect_ManifestFactory$PhantomManifest = (function(obj) {
  if ((ScalaJS.is.scala_reflect_ManifestFactory$PhantomManifest(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.reflect.ManifestFactory$PhantomManifest")
  }
});
ScalaJS.isArrayOf.scala_reflect_ManifestFactory$PhantomManifest = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_reflect_ManifestFactory$PhantomManifest)))
});
ScalaJS.asArrayOf.scala_reflect_ManifestFactory$PhantomManifest = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_reflect_ManifestFactory$PhantomManifest(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.reflect.ManifestFactory$PhantomManifest;", depth)
  }
});
ScalaJS.data.scala_reflect_ManifestFactory$PhantomManifest = new ScalaJS.ClassTypeData({
  scala_reflect_ManifestFactory$PhantomManifest: 0
}, false, "scala.reflect.ManifestFactory$PhantomManifest", ScalaJS.data.scala_reflect_ManifestFactory$ClassTypeManifest, {
  scala_reflect_ManifestFactory$PhantomManifest: 1,
  scala_reflect_ManifestFactory$ClassTypeManifest: 1,
  scala_reflect_Manifest: 1,
  scala_reflect_ClassTag: 1,
  scala_Equals: 1,
  scala_reflect_ClassManifestDeprecatedApis: 1,
  scala_reflect_OptManifest: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_reflect_ManifestFactory$PhantomManifest.prototype.$classData = ScalaJS.data.scala_reflect_ManifestFactory$PhantomManifest;
//@ sourceMappingURL=ManifestFactory$PhantomManifest.js.map
