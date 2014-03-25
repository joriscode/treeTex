/** @constructor */
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.value$1 = null;
  this.runtimeClass$1 = null;
  this.toString$1 = null;
  this.bitmap$0$1 = 0
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.constructor = ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest;
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.runtimeClass$lzycompute__p1__Ljava_lang_Class = (function() {
  if (((this.bitmap$0$1 & 1) === 0)) {
    this.runtimeClass$1 = ScalaJS.objectGetClass(this.value$1);
    this.bitmap$0$1 = (this.bitmap$0$1 | 1)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.runtimeClass$1
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.toString$lzycompute__p1__T = (function() {
  if (((this.bitmap$0$1 & 2) === 0)) {
    this.toString$1 = (("" + ScalaJS.objectToString(this.value$1)) + ".type");
    this.bitmap$0$1 = (this.bitmap$0$1 | 2)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.toString$1
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.typeArguments__Lscala_collection_immutable_List = (function() {
  return ScalaJS.impls.scala_reflect_Manifest$class__typeArguments__Lscala_reflect_Manifest__Lscala_collection_immutable_List(this)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.arrayManifest__Lscala_reflect_Manifest = (function() {
  return ScalaJS.impls.scala_reflect_Manifest$class__arrayManifest__Lscala_reflect_Manifest__Lscala_reflect_Manifest(this)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.canEqual__O__Z = (function(that) {
  return ScalaJS.impls.scala_reflect_Manifest$class__canEqual__Lscala_reflect_Manifest__O__Z(this, that)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.equals__O__Z = (function(that) {
  return ScalaJS.impls.scala_reflect_Manifest$class__equals__Lscala_reflect_Manifest__O__Z(this, that)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.hashCode__I = (function() {
  return ScalaJS.impls.scala_reflect_Manifest$class__hashCode__Lscala_reflect_Manifest__I(this)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.wrap__Lscala_reflect_ClassTag = (function() {
  return ScalaJS.impls.scala_reflect_ClassTag$class__wrap__Lscala_reflect_ClassTag__Lscala_reflect_ClassTag(this)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.newArray__I__O = (function(len) {
  return ScalaJS.impls.scala_reflect_ClassTag$class__newArray__Lscala_reflect_ClassTag__I__O(this, len)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.unapply__O__Lscala_Option = (function(x) {
  return ScalaJS.impls.scala_reflect_ClassTag$class__unapply__Lscala_reflect_ClassTag__O__Lscala_Option(this, x)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.unapply__B__Lscala_Option = (function(x) {
  return ScalaJS.impls.scala_reflect_ClassTag$class__unapply__Lscala_reflect_ClassTag__B__Lscala_Option(this, x)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.unapply__S__Lscala_Option = (function(x) {
  return ScalaJS.impls.scala_reflect_ClassTag$class__unapply__Lscala_reflect_ClassTag__S__Lscala_Option(this, x)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.unapply__C__Lscala_Option = (function(x) {
  return ScalaJS.impls.scala_reflect_ClassTag$class__unapply__Lscala_reflect_ClassTag__C__Lscala_Option(this, x)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.unapply__I__Lscala_Option = (function(x) {
  return ScalaJS.impls.scala_reflect_ClassTag$class__unapply__Lscala_reflect_ClassTag__I__Lscala_Option(this, x)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.unapply__J__Lscala_Option = (function(x) {
  return ScalaJS.impls.scala_reflect_ClassTag$class__unapply__Lscala_reflect_ClassTag__J__Lscala_Option(this, x)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.unapply__F__Lscala_Option = (function(x) {
  return ScalaJS.impls.scala_reflect_ClassTag$class__unapply__Lscala_reflect_ClassTag__F__Lscala_Option(this, x)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.unapply__D__Lscala_Option = (function(x) {
  return ScalaJS.impls.scala_reflect_ClassTag$class__unapply__Lscala_reflect_ClassTag__D__Lscala_Option(this, x)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.unapply__Z__Lscala_Option = (function(x) {
  return ScalaJS.impls.scala_reflect_ClassTag$class__unapply__Lscala_reflect_ClassTag__Z__Lscala_Option(this, x)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.unapply__Lscala_runtime_BoxedUnit__Lscala_Option = (function(x) {
  return ScalaJS.impls.scala_reflect_ClassTag$class__unapply__Lscala_reflect_ClassTag__Lscala_runtime_BoxedUnit__Lscala_Option(this, x)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.erasure__Ljava_lang_Class = (function() {
  return ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__erasure__Lscala_reflect_ClassTag__Ljava_lang_Class(this)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.$$less$colon$less__Lscala_reflect_ClassTag__Z = (function(that) {
  return ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__$less$colon$less__Lscala_reflect_ClassTag__Lscala_reflect_ClassTag__Z(this, that)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.$$greater$colon$greater__Lscala_reflect_ClassTag__Z = (function(that) {
  return ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__$greater$colon$greater__Lscala_reflect_ClassTag__Lscala_reflect_ClassTag__Z(this, that)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.arrayClass__Ljava_lang_Class__Ljava_lang_Class = (function(tp) {
  return ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__arrayClass__Lscala_reflect_ClassTag__Ljava_lang_Class__Ljava_lang_Class(this, tp)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.newArray2__I__AO = (function(len) {
  return ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__newArray2__Lscala_reflect_ClassTag__I__AO(this, len)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.newArray3__I__AAO = (function(len) {
  return ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__newArray3__Lscala_reflect_ClassTag__I__AAO(this, len)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.newArray4__I__AAAO = (function(len) {
  return ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__newArray4__Lscala_reflect_ClassTag__I__AAAO(this, len)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.newArray5__I__AAAAO = (function(len) {
  return ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__newArray5__Lscala_reflect_ClassTag__I__AAAAO(this, len)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.newWrappedArray__I__Lscala_collection_mutable_WrappedArray = (function(len) {
  return ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__newWrappedArray__Lscala_reflect_ClassTag__I__Lscala_collection_mutable_WrappedArray(this, len)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.newArrayBuilder__Lscala_collection_mutable_ArrayBuilder = (function() {
  return ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__newArrayBuilder__Lscala_reflect_ClassTag__Lscala_collection_mutable_ArrayBuilder(this)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.argString__T = (function() {
  return ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__argString__Lscala_reflect_ClassTag__T(this)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.runtimeClass__Ljava_lang_Class = (function() {
  if (((this.bitmap$0$1 & 1) === 0)) {
    return this.runtimeClass$lzycompute__p1__Ljava_lang_Class()
  } else {
    return this.runtimeClass$1
  }
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.toString__T = (function() {
  if (((this.bitmap$0$1 & 2) === 0)) {
    return this.toString$lzycompute__p1__T()
  } else {
    return this.toString$1
  }
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.arrayManifest__Lscala_reflect_ClassTag = (function() {
  return this.arrayManifest__Lscala_reflect_Manifest()
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.init___O = (function(value) {
  this.value$1 = value;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__$init$__Lscala_reflect_ClassTag__V(this);
  ScalaJS.impls.scala_reflect_ClassTag$class__$init$__Lscala_reflect_ClassTag__V(this);
  ScalaJS.impls.scala_reflect_Manifest$class__$init$__Lscala_reflect_Manifest__V(this);
  return this
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.argString__ = (function() {
  return this.argString__T()
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.newArrayBuilder__ = (function() {
  return this.newArrayBuilder__Lscala_collection_mutable_ArrayBuilder()
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.newWrappedArray__I__ = (function(len) {
  return this.newWrappedArray__I__Lscala_collection_mutable_WrappedArray(len)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.newArray5__I__ = (function(len$2) {
  return this.newArray5__I__AAAAO(len$2)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.newArray4__I__ = (function(len$3) {
  return this.newArray4__I__AAAO(len$3)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.newArray3__I__ = (function(len$4) {
  return this.newArray3__I__AAO(len$4)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.newArray2__I__ = (function(len$5) {
  return this.newArray2__I__AO(len$5)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.arrayClass__Ljava_lang_Class__ = (function(tp) {
  return this.arrayClass__Ljava_lang_Class__Ljava_lang_Class(tp)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.$$greater$colon$greater__Lscala_reflect_ClassTag__ = (function(that) {
  return ScalaJS.bZ(this.$$greater$colon$greater__Lscala_reflect_ClassTag__Z(that))
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.$$less$colon$less__Lscala_reflect_ClassTag__ = (function(that$2) {
  return ScalaJS.bZ(this.$$less$colon$less__Lscala_reflect_ClassTag__Z(that$2))
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.erasure__ = (function() {
  return this.erasure__Ljava_lang_Class()
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.unapply__Lscala_runtime_BoxedUnit__ = (function(x) {
  return this.unapply__Lscala_runtime_BoxedUnit__Lscala_Option(x)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.unapply__Z__ = (function(x$2) {
  return this.unapply__Z__Lscala_Option(x$2)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.unapply__D__ = (function(x$3) {
  return this.unapply__D__Lscala_Option(x$3)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.unapply__F__ = (function(x$4) {
  return this.unapply__F__Lscala_Option(x$4)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.unapply__J__ = (function(x$5) {
  return this.unapply__J__Lscala_Option(x$5)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.unapply__I__ = (function(x$6) {
  return this.unapply__I__Lscala_Option(x$6)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.unapply__C__ = (function(x$7) {
  return this.unapply__C__Lscala_Option(x$7)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.unapply__S__ = (function(x$8) {
  return this.unapply__S__Lscala_Option(x$8)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.unapply__B__ = (function(x$9) {
  return this.unapply__B__Lscala_Option(x$9)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.unapply__O__ = (function(x$10) {
  return this.unapply__O__Lscala_Option(x$10)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.newArray__I__ = (function(len$6) {
  return this.newArray__I__O(len$6)
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.wrap__ = (function() {
  return this.wrap__Lscala_reflect_ClassTag()
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.canEqual__O__ = (function(that$3) {
  return ScalaJS.bZ(this.canEqual__O__Z(that$3))
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.arrayManifest__ = (function() {
  return this.arrayManifest__Lscala_reflect_Manifest()
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.typeArguments__ = (function() {
  return this.typeArguments__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.runtimeClass__ = (function() {
  return this.runtimeClass__Ljava_lang_Class()
});
/** @constructor */
ScalaJS.inheritable.scala_reflect_ManifestFactory$SingletonTypeManifest = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype = ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype;
ScalaJS.is.scala_reflect_ManifestFactory$SingletonTypeManifest = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_reflect_ManifestFactory$SingletonTypeManifest)))
});
ScalaJS.as.scala_reflect_ManifestFactory$SingletonTypeManifest = (function(obj) {
  if ((ScalaJS.is.scala_reflect_ManifestFactory$SingletonTypeManifest(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.reflect.ManifestFactory$SingletonTypeManifest")
  }
});
ScalaJS.isArrayOf.scala_reflect_ManifestFactory$SingletonTypeManifest = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_reflect_ManifestFactory$SingletonTypeManifest)))
});
ScalaJS.asArrayOf.scala_reflect_ManifestFactory$SingletonTypeManifest = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_reflect_ManifestFactory$SingletonTypeManifest(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.reflect.ManifestFactory$SingletonTypeManifest;", depth)
  }
});
ScalaJS.data.scala_reflect_ManifestFactory$SingletonTypeManifest = new ScalaJS.ClassTypeData({
  scala_reflect_ManifestFactory$SingletonTypeManifest: 0
}, false, "scala.reflect.ManifestFactory$SingletonTypeManifest", ScalaJS.data.java_lang_Object, {
  scala_reflect_ManifestFactory$SingletonTypeManifest: 1,
  scala_reflect_Manifest: 1,
  scala_reflect_ClassTag: 1,
  scala_Equals: 1,
  scala_reflect_ClassManifestDeprecatedApis: 1,
  scala_reflect_OptManifest: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest.prototype.$classData = ScalaJS.data.scala_reflect_ManifestFactory$SingletonTypeManifest;
//@ sourceMappingURL=ManifestFactory$SingletonTypeManifest.js.map
