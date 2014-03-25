/** @constructor */
ScalaJS.c.scala_reflect_ManifestFactory$$anon$5 = (function() {
  ScalaJS.c.scala_reflect_ManifestFactory$PhantomManifest.call(this)
});
ScalaJS.c.scala_reflect_ManifestFactory$$anon$5.prototype = new ScalaJS.inheritable.scala_reflect_ManifestFactory$PhantomManifest();
ScalaJS.c.scala_reflect_ManifestFactory$$anon$5.prototype.constructor = ScalaJS.c.scala_reflect_ManifestFactory$$anon$5;
ScalaJS.c.scala_reflect_ManifestFactory$$anon$5.prototype.newArray__I__AO = (function(len) {
  return ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [len])
});
ScalaJS.c.scala_reflect_ManifestFactory$$anon$5.prototype.$$less$colon$less__Lscala_reflect_ClassTag__Z = (function(that) {
  return (that !== null)
});
ScalaJS.c.scala_reflect_ManifestFactory$$anon$5.prototype.readResolve__p3__O = (function() {
  return ScalaJS.modules.scala_reflect_package().Manifest__Lscala_reflect_ManifestFactory$().Nothing__Lscala_reflect_Manifest()
});
ScalaJS.c.scala_reflect_ManifestFactory$$anon$5.prototype.newArray__I__O = (function(len) {
  return this.newArray__I__AO(len)
});
ScalaJS.c.scala_reflect_ManifestFactory$$anon$5.prototype.init___ = (function() {
  ScalaJS.c.scala_reflect_ManifestFactory$PhantomManifest.prototype.init___Ljava_lang_Class__T.call(this, ScalaJS.modules.scala_reflect_ManifestFactory().scala$reflect$ManifestFactory$$NothingTYPE__Ljava_lang_Class(), "Nothing");
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_reflect_ManifestFactory$$anon$5 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_reflect_ManifestFactory$$anon$5.prototype = ScalaJS.c.scala_reflect_ManifestFactory$$anon$5.prototype;
ScalaJS.is.scala_reflect_ManifestFactory$$anon$5 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_reflect_ManifestFactory$$anon$5)))
});
ScalaJS.as.scala_reflect_ManifestFactory$$anon$5 = (function(obj) {
  if ((ScalaJS.is.scala_reflect_ManifestFactory$$anon$5(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.reflect.ManifestFactory$$anon$5")
  }
});
ScalaJS.isArrayOf.scala_reflect_ManifestFactory$$anon$5 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_reflect_ManifestFactory$$anon$5)))
});
ScalaJS.asArrayOf.scala_reflect_ManifestFactory$$anon$5 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_reflect_ManifestFactory$$anon$5(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.reflect.ManifestFactory$$anon$5;", depth)
  }
});
ScalaJS.data.scala_reflect_ManifestFactory$$anon$5 = new ScalaJS.ClassTypeData({
  scala_reflect_ManifestFactory$$anon$5: 0
}, false, "scala.reflect.ManifestFactory$$anon$5", ScalaJS.data.scala_reflect_ManifestFactory$PhantomManifest, {
  scala_reflect_ManifestFactory$$anon$5: 1,
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
ScalaJS.c.scala_reflect_ManifestFactory$$anon$5.prototype.$classData = ScalaJS.data.scala_reflect_ManifestFactory$$anon$5;
//@ sourceMappingURL=ManifestFactory$$anon$5.js.map
