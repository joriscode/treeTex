/** @constructor */
ScalaJS.c.scala_reflect_ManifestFactory$$anon$14 = (function() {
  ScalaJS.c.scala_reflect_AnyValManifest.call(this)
});
ScalaJS.c.scala_reflect_ManifestFactory$$anon$14.prototype = new ScalaJS.inheritable.scala_reflect_AnyValManifest();
ScalaJS.c.scala_reflect_ManifestFactory$$anon$14.prototype.constructor = ScalaJS.c.scala_reflect_ManifestFactory$$anon$14;
ScalaJS.c.scala_reflect_ManifestFactory$$anon$14.prototype.runtimeClass__Ljava_lang_Class = (function() {
  return ScalaJS.modules.java_lang_Void().TYPE__Ljava_lang_Class()
});
ScalaJS.c.scala_reflect_ManifestFactory$$anon$14.prototype.newArray__I__ALscala_runtime_BoxedUnit = (function(len) {
  return ScalaJS.newArrayObject(ScalaJS.data.scala_runtime_BoxedUnit.getArrayOf(), [len])
});
ScalaJS.c.scala_reflect_ManifestFactory$$anon$14.prototype.newWrappedArray__I__Lscala_collection_mutable_WrappedArray = (function(len) {
  return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofUnit().init___ALscala_runtime_BoxedUnit(ScalaJS.newArrayObject(ScalaJS.data.scala_runtime_BoxedUnit.getArrayOf(), [len]))
});
ScalaJS.c.scala_reflect_ManifestFactory$$anon$14.prototype.newArrayBuilder__Lscala_collection_mutable_ArrayBuilder = (function() {
  return new ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofUnit().init___()
});
ScalaJS.c.scala_reflect_ManifestFactory$$anon$14.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_reflect_package().Manifest__Lscala_reflect_ManifestFactory$().Unit__Lscala_reflect_AnyValManifest()
});
ScalaJS.c.scala_reflect_ManifestFactory$$anon$14.prototype.newArray__I__O = (function(len) {
  return this.newArray__I__ALscala_runtime_BoxedUnit(len)
});
ScalaJS.c.scala_reflect_ManifestFactory$$anon$14.prototype.init___ = (function() {
  ScalaJS.c.scala_reflect_AnyValManifest.prototype.init___T.call(this, "Unit");
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_reflect_ManifestFactory$$anon$14 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_reflect_ManifestFactory$$anon$14.prototype = ScalaJS.c.scala_reflect_ManifestFactory$$anon$14.prototype;
ScalaJS.is.scala_reflect_ManifestFactory$$anon$14 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_reflect_ManifestFactory$$anon$14)))
});
ScalaJS.as.scala_reflect_ManifestFactory$$anon$14 = (function(obj) {
  if ((ScalaJS.is.scala_reflect_ManifestFactory$$anon$14(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.reflect.ManifestFactory$$anon$14")
  }
});
ScalaJS.isArrayOf.scala_reflect_ManifestFactory$$anon$14 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_reflect_ManifestFactory$$anon$14)))
});
ScalaJS.asArrayOf.scala_reflect_ManifestFactory$$anon$14 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_reflect_ManifestFactory$$anon$14(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.reflect.ManifestFactory$$anon$14;", depth)
  }
});
ScalaJS.data.scala_reflect_ManifestFactory$$anon$14 = new ScalaJS.ClassTypeData({
  scala_reflect_ManifestFactory$$anon$14: 0
}, false, "scala.reflect.ManifestFactory$$anon$14", ScalaJS.data.scala_reflect_AnyValManifest, {
  scala_reflect_ManifestFactory$$anon$14: 1,
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
ScalaJS.c.scala_reflect_ManifestFactory$$anon$14.prototype.$classData = ScalaJS.data.scala_reflect_ManifestFactory$$anon$14;
//@ sourceMappingURL=ManifestFactory$$anon$14.js.map
