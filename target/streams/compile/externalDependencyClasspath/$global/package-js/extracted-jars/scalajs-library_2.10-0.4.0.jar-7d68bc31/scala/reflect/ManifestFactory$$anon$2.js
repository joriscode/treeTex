/** @constructor */
ScalaJS.c.scala_reflect_ManifestFactory$$anon$2 = (function() {
  ScalaJS.c.scala_reflect_ManifestFactory$PhantomManifest.call(this)
});
ScalaJS.c.scala_reflect_ManifestFactory$$anon$2.prototype = new ScalaJS.inheritable.scala_reflect_ManifestFactory$PhantomManifest();
ScalaJS.c.scala_reflect_ManifestFactory$$anon$2.prototype.constructor = ScalaJS.c.scala_reflect_ManifestFactory$$anon$2;
ScalaJS.c.scala_reflect_ManifestFactory$$anon$2.prototype.newArray__I__AO = (function(len) {
  return ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [len])
});
ScalaJS.c.scala_reflect_ManifestFactory$$anon$2.prototype.$$less$colon$less__Lscala_reflect_ClassTag__Z = (function(that) {
  return ((that === this) || (that === ScalaJS.modules.scala_reflect_ManifestFactory().Any__Lscala_reflect_Manifest()))
});
ScalaJS.c.scala_reflect_ManifestFactory$$anon$2.prototype.readResolve__p3__O = (function() {
  return ScalaJS.modules.scala_reflect_package().Manifest__Lscala_reflect_ManifestFactory$().Object__Lscala_reflect_Manifest()
});
ScalaJS.c.scala_reflect_ManifestFactory$$anon$2.prototype.newArray__I__O = (function(len) {
  return this.newArray__I__AO(len)
});
ScalaJS.c.scala_reflect_ManifestFactory$$anon$2.prototype.init___ = (function() {
  ScalaJS.c.scala_reflect_ManifestFactory$PhantomManifest.prototype.init___Ljava_lang_Class__T.call(this, ScalaJS.modules.scala_reflect_ManifestFactory().scala$reflect$ManifestFactory$$ObjectTYPE__Ljava_lang_Class(), "Object");
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_reflect_ManifestFactory$$anon$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_reflect_ManifestFactory$$anon$2.prototype = ScalaJS.c.scala_reflect_ManifestFactory$$anon$2.prototype;
ScalaJS.is.scala_reflect_ManifestFactory$$anon$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_reflect_ManifestFactory$$anon$2)))
});
ScalaJS.as.scala_reflect_ManifestFactory$$anon$2 = (function(obj) {
  if ((ScalaJS.is.scala_reflect_ManifestFactory$$anon$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.reflect.ManifestFactory$$anon$2")
  }
});
ScalaJS.isArrayOf.scala_reflect_ManifestFactory$$anon$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_reflect_ManifestFactory$$anon$2)))
});
ScalaJS.asArrayOf.scala_reflect_ManifestFactory$$anon$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_reflect_ManifestFactory$$anon$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.reflect.ManifestFactory$$anon$2;", depth)
  }
});
ScalaJS.data.scala_reflect_ManifestFactory$$anon$2 = new ScalaJS.ClassTypeData({
  scala_reflect_ManifestFactory$$anon$2: 0
}, false, "scala.reflect.ManifestFactory$$anon$2", ScalaJS.data.scala_reflect_ManifestFactory$PhantomManifest, {
  scala_reflect_ManifestFactory$$anon$2: 1,
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
ScalaJS.c.scala_reflect_ManifestFactory$$anon$2.prototype.$classData = ScalaJS.data.scala_reflect_ManifestFactory$$anon$2;
//@ sourceMappingURL=ManifestFactory$$anon$2.js.map