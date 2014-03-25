/** @constructor */
ScalaJS.c.scala_reflect_ManifestFactory$$anon$8 = (function() {
  ScalaJS.c.scala_reflect_AnyValManifest.call(this)
});
ScalaJS.c.scala_reflect_ManifestFactory$$anon$8.prototype = new ScalaJS.inheritable.scala_reflect_AnyValManifest();
ScalaJS.c.scala_reflect_ManifestFactory$$anon$8.prototype.constructor = ScalaJS.c.scala_reflect_ManifestFactory$$anon$8;
ScalaJS.c.scala_reflect_ManifestFactory$$anon$8.prototype.runtimeClass__Ljava_lang_Class = (function() {
  return ScalaJS.modules.java_lang_Character().TYPE__Ljava_lang_Class()
});
ScalaJS.c.scala_reflect_ManifestFactory$$anon$8.prototype.newArray__I__AC = (function(len) {
  return ScalaJS.newArrayObject(ScalaJS.data.scala_Char.getArrayOf(), [len])
});
ScalaJS.c.scala_reflect_ManifestFactory$$anon$8.prototype.newWrappedArray__I__Lscala_collection_mutable_WrappedArray = (function(len) {
  return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofChar().init___AC(ScalaJS.newArrayObject(ScalaJS.data.scala_Char.getArrayOf(), [len]))
});
ScalaJS.c.scala_reflect_ManifestFactory$$anon$8.prototype.newArrayBuilder__Lscala_collection_mutable_ArrayBuilder = (function() {
  return new ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofChar().init___()
});
ScalaJS.c.scala_reflect_ManifestFactory$$anon$8.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_reflect_package().Manifest__Lscala_reflect_ManifestFactory$().Char__Lscala_reflect_AnyValManifest()
});
ScalaJS.c.scala_reflect_ManifestFactory$$anon$8.prototype.newArray__I__O = (function(len) {
  return this.newArray__I__AC(len)
});
ScalaJS.c.scala_reflect_ManifestFactory$$anon$8.prototype.init___ = (function() {
  ScalaJS.c.scala_reflect_AnyValManifest.prototype.init___T.call(this, "Char");
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_reflect_ManifestFactory$$anon$8 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_reflect_ManifestFactory$$anon$8.prototype = ScalaJS.c.scala_reflect_ManifestFactory$$anon$8.prototype;
ScalaJS.is.scala_reflect_ManifestFactory$$anon$8 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_reflect_ManifestFactory$$anon$8)))
});
ScalaJS.as.scala_reflect_ManifestFactory$$anon$8 = (function(obj) {
  if ((ScalaJS.is.scala_reflect_ManifestFactory$$anon$8(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.reflect.ManifestFactory$$anon$8")
  }
});
ScalaJS.isArrayOf.scala_reflect_ManifestFactory$$anon$8 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_reflect_ManifestFactory$$anon$8)))
});
ScalaJS.asArrayOf.scala_reflect_ManifestFactory$$anon$8 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_reflect_ManifestFactory$$anon$8(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.reflect.ManifestFactory$$anon$8;", depth)
  }
});
ScalaJS.data.scala_reflect_ManifestFactory$$anon$8 = new ScalaJS.ClassTypeData({
  scala_reflect_ManifestFactory$$anon$8: 0
}, false, "scala.reflect.ManifestFactory$$anon$8", ScalaJS.data.scala_reflect_AnyValManifest, {
  scala_reflect_ManifestFactory$$anon$8: 1,
  scala_reflect_AnyValManifest: 1,
  scala_reflect_Manifest: 1,
  scala_reflect_ClassTag: 1,
  scala_Equals: 1,
  scala_reflect_ClassManifestDeprecatedApis: 1,
  scala_reflect_OptManifest: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_reflect_ManifestFactory$$anon$8.prototype.$classData = ScalaJS.data.scala_reflect_ManifestFactory$$anon$8;
//@ sourceMappingURL=ManifestFactory$$anon$8.js.map
