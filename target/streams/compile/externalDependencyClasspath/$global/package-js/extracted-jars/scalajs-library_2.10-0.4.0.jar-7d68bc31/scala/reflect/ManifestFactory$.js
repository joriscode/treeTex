/** @constructor */
ScalaJS.c.scala_reflect_ManifestFactory$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.Byte$1 = null;
  this.Short$1 = null;
  this.Char$1 = null;
  this.Int$1 = null;
  this.Long$1 = null;
  this.Float$1 = null;
  this.Double$1 = null;
  this.Boolean$1 = null;
  this.Unit$1 = null;
  this.scala$reflect$ManifestFactory$$ObjectTYPE$1 = null;
  this.scala$reflect$ManifestFactory$$NothingTYPE$1 = null;
  this.scala$reflect$ManifestFactory$$NullTYPE$1 = null;
  this.Any$1 = null;
  this.Object$1 = null;
  this.AnyRef$1 = null;
  this.AnyVal$1 = null;
  this.Null$1 = null;
  this.Nothing$1 = null
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.constructor = ScalaJS.c.scala_reflect_ManifestFactory$;
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.valueManifests__Lscala_collection_immutable_List = (function() {
  return ScalaJS.modules.scala_collection_immutable_List().apply__Lscala_collection_Seq__Lscala_collection_immutable_List(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_reflect_AnyValManifest.getArrayOf(), [this.Byte__Lscala_reflect_AnyValManifest(), this.Short__Lscala_reflect_AnyValManifest(), this.Char__Lscala_reflect_AnyValManifest(), this.Int__Lscala_reflect_AnyValManifest(), this.Long__Lscala_reflect_AnyValManifest(), this.Float__Lscala_reflect_AnyValManifest(), this.Double__Lscala_reflect_AnyValManifest(), this.Boolean__Lscala_reflect_AnyValManifest(), this.Unit__Lscala_reflect_AnyValManifest()]), 1)))
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.Byte__Lscala_reflect_AnyValManifest = (function() {
  return this.Byte$1
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.Short__Lscala_reflect_AnyValManifest = (function() {
  return this.Short$1
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.Char__Lscala_reflect_AnyValManifest = (function() {
  return this.Char$1
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.Int__Lscala_reflect_AnyValManifest = (function() {
  return this.Int$1
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.Long__Lscala_reflect_AnyValManifest = (function() {
  return this.Long$1
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.Float__Lscala_reflect_AnyValManifest = (function() {
  return this.Float$1
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.Double__Lscala_reflect_AnyValManifest = (function() {
  return this.Double$1
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.Boolean__Lscala_reflect_AnyValManifest = (function() {
  return this.Boolean$1
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.Unit__Lscala_reflect_AnyValManifest = (function() {
  return this.Unit$1
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.scala$reflect$ManifestFactory$$ObjectTYPE__Ljava_lang_Class = (function() {
  return this.scala$reflect$ManifestFactory$$ObjectTYPE$1
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.scala$reflect$ManifestFactory$$NothingTYPE__Ljava_lang_Class = (function() {
  return this.scala$reflect$ManifestFactory$$NothingTYPE$1
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.scala$reflect$ManifestFactory$$NullTYPE__Ljava_lang_Class = (function() {
  return this.scala$reflect$ManifestFactory$$NullTYPE$1
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.Any__Lscala_reflect_Manifest = (function() {
  return this.Any$1
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.Object__Lscala_reflect_Manifest = (function() {
  return this.Object$1
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.AnyRef__Lscala_reflect_Manifest = (function() {
  return this.AnyRef$1
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.AnyVal__Lscala_reflect_Manifest = (function() {
  return this.AnyVal$1
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.Null__Lscala_reflect_Manifest = (function() {
  return this.Null$1
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.Nothing__Lscala_reflect_Manifest = (function() {
  return this.Nothing$1
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.singleType__O__Lscala_reflect_Manifest = (function(value) {
  return new ScalaJS.c.scala_reflect_ManifestFactory$SingletonTypeManifest().init___O(value)
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.classType__Ljava_lang_Class__Lscala_reflect_Manifest = (function(clazz) {
  return new ScalaJS.c.scala_reflect_ManifestFactory$ClassTypeManifest().init___Lscala_Option__Ljava_lang_Class__Lscala_collection_immutable_List(ScalaJS.modules.scala_None(), clazz, ScalaJS.modules.scala_collection_immutable_Nil())
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.classType__Ljava_lang_Class__Lscala_reflect_Manifest__Lscala_collection_Seq__Lscala_reflect_Manifest = (function(clazz, arg1, args) {
  var jsx$4 = new ScalaJS.c.scala_reflect_ManifestFactory$ClassTypeManifest();
  var jsx$3 = ScalaJS.modules.scala_None();
  var jsx$2 = clazz;
  var x$1 = arg1;
  var jsx$1 = args.toList__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(x$1);
  return jsx$4.init___Lscala_Option__Ljava_lang_Class__Lscala_collection_immutable_List(jsx$3, jsx$2, jsx$1)
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.classType__Lscala_reflect_Manifest__Ljava_lang_Class__Lscala_collection_Seq__Lscala_reflect_Manifest = (function(prefix, clazz, args) {
  return new ScalaJS.c.scala_reflect_ManifestFactory$ClassTypeManifest().init___Lscala_Option__Ljava_lang_Class__Lscala_collection_immutable_List(new ScalaJS.c.scala_Some().init___O(prefix), clazz, args.toList__Lscala_collection_immutable_List())
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.arrayType__Lscala_reflect_Manifest__Lscala_reflect_Manifest = (function(arg) {
  return arg.arrayManifest__Lscala_reflect_Manifest()
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.abstractType__Lscala_reflect_Manifest__T__Ljava_lang_Class__Lscala_collection_Seq__Lscala_reflect_Manifest = (function(prefix, name, upperBound, args) {
  return new ScalaJS.c.scala_reflect_ManifestFactory$$anon$15().init___Lscala_reflect_Manifest__T__Ljava_lang_Class__Lscala_collection_Seq(prefix, name, upperBound, args)
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.wildcardType__Lscala_reflect_Manifest__Lscala_reflect_Manifest__Lscala_reflect_Manifest = (function(lowerBound, upperBound) {
  return new ScalaJS.c.scala_reflect_ManifestFactory$$anon$16().init___Lscala_reflect_Manifest__Lscala_reflect_Manifest(lowerBound, upperBound)
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.intersectionType__Lscala_collection_Seq__Lscala_reflect_Manifest = (function(parents) {
  return new ScalaJS.c.scala_reflect_ManifestFactory$$anon$17().init___Lscala_collection_Seq(parents)
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_reflect_ManifestFactory = this;
  this.Byte$1 = new ScalaJS.c.scala_reflect_ManifestFactory$$anon$6().init___();
  this.Short$1 = new ScalaJS.c.scala_reflect_ManifestFactory$$anon$7().init___();
  this.Char$1 = new ScalaJS.c.scala_reflect_ManifestFactory$$anon$8().init___();
  this.Int$1 = new ScalaJS.c.scala_reflect_ManifestFactory$$anon$9().init___();
  this.Long$1 = new ScalaJS.c.scala_reflect_ManifestFactory$$anon$10().init___();
  this.Float$1 = new ScalaJS.c.scala_reflect_ManifestFactory$$anon$11().init___();
  this.Double$1 = new ScalaJS.c.scala_reflect_ManifestFactory$$anon$12().init___();
  this.Boolean$1 = new ScalaJS.c.scala_reflect_ManifestFactory$$anon$13().init___();
  this.Unit$1 = new ScalaJS.c.scala_reflect_ManifestFactory$$anon$14().init___();
  this.scala$reflect$ManifestFactory$$ObjectTYPE$1 = ScalaJS.data.java_lang_Object.getClassOf();
  this.scala$reflect$ManifestFactory$$NothingTYPE$1 = ScalaJS.data.scala_runtime_Nothing$.getClassOf();
  this.scala$reflect$ManifestFactory$$NullTYPE$1 = ScalaJS.data.scala_runtime_Null$.getClassOf();
  this.Any$1 = new ScalaJS.c.scala_reflect_ManifestFactory$$anon$1().init___();
  this.Object$1 = new ScalaJS.c.scala_reflect_ManifestFactory$$anon$2().init___();
  this.AnyRef$1 = this.Object__Lscala_reflect_Manifest();
  this.AnyVal$1 = new ScalaJS.c.scala_reflect_ManifestFactory$$anon$3().init___();
  this.Null$1 = new ScalaJS.c.scala_reflect_ManifestFactory$$anon$4().init___();
  this.Nothing$1 = new ScalaJS.c.scala_reflect_ManifestFactory$$anon$5().init___();
  return this
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.intersectionType__Lscala_collection_Seq__ = (function(parents) {
  return this.intersectionType__Lscala_collection_Seq__Lscala_reflect_Manifest(parents)
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.wildcardType__Lscala_reflect_Manifest__Lscala_reflect_Manifest__ = (function(lowerBound, upperBound) {
  return this.wildcardType__Lscala_reflect_Manifest__Lscala_reflect_Manifest__Lscala_reflect_Manifest(lowerBound, upperBound)
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.abstractType__Lscala_reflect_Manifest__T__Ljava_lang_Class__Lscala_collection_Seq__ = (function(prefix, name, upperBound$2, args) {
  return this.abstractType__Lscala_reflect_Manifest__T__Ljava_lang_Class__Lscala_collection_Seq__Lscala_reflect_Manifest(prefix, name, upperBound$2, args)
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.arrayType__Lscala_reflect_Manifest__ = (function(arg) {
  return this.arrayType__Lscala_reflect_Manifest__Lscala_reflect_Manifest(arg)
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.classType__Lscala_reflect_Manifest__Ljava_lang_Class__Lscala_collection_Seq__ = (function(prefix$2, clazz, args$2) {
  return this.classType__Lscala_reflect_Manifest__Ljava_lang_Class__Lscala_collection_Seq__Lscala_reflect_Manifest(prefix$2, clazz, args$2)
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.classType__Ljava_lang_Class__Lscala_reflect_Manifest__Lscala_collection_Seq__ = (function(clazz$2, arg1, args$3) {
  return this.classType__Ljava_lang_Class__Lscala_reflect_Manifest__Lscala_collection_Seq__Lscala_reflect_Manifest(clazz$2, arg1, args$3)
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.classType__Ljava_lang_Class__ = (function(clazz$3) {
  return this.classType__Ljava_lang_Class__Lscala_reflect_Manifest(clazz$3)
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.singleType__O__ = (function(value) {
  return this.singleType__O__Lscala_reflect_Manifest(value)
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.Nothing__ = (function() {
  return this.Nothing__Lscala_reflect_Manifest()
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.Null__ = (function() {
  return this.Null__Lscala_reflect_Manifest()
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.AnyVal__ = (function() {
  return this.AnyVal__Lscala_reflect_Manifest()
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.AnyRef__ = (function() {
  return this.AnyRef__Lscala_reflect_Manifest()
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.Object__ = (function() {
  return this.Object__Lscala_reflect_Manifest()
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.Any__ = (function() {
  return this.Any__Lscala_reflect_Manifest()
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.scala$reflect$ManifestFactory$$NullTYPE__ = (function() {
  return this.scala$reflect$ManifestFactory$$NullTYPE__Ljava_lang_Class()
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.scala$reflect$ManifestFactory$$NothingTYPE__ = (function() {
  return this.scala$reflect$ManifestFactory$$NothingTYPE__Ljava_lang_Class()
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.scala$reflect$ManifestFactory$$ObjectTYPE__ = (function() {
  return this.scala$reflect$ManifestFactory$$ObjectTYPE__Ljava_lang_Class()
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.Unit__ = (function() {
  return this.Unit__Lscala_reflect_AnyValManifest()
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.Boolean__ = (function() {
  return this.Boolean__Lscala_reflect_AnyValManifest()
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.Double__ = (function() {
  return this.Double__Lscala_reflect_AnyValManifest()
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.Float__ = (function() {
  return this.Float__Lscala_reflect_AnyValManifest()
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.Long__ = (function() {
  return this.Long__Lscala_reflect_AnyValManifest()
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.Int__ = (function() {
  return this.Int__Lscala_reflect_AnyValManifest()
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.Char__ = (function() {
  return this.Char__Lscala_reflect_AnyValManifest()
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.Short__ = (function() {
  return this.Short__Lscala_reflect_AnyValManifest()
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.Byte__ = (function() {
  return this.Byte__Lscala_reflect_AnyValManifest()
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.valueManifests__ = (function() {
  return this.valueManifests__Lscala_collection_immutable_List()
});
/** @constructor */
ScalaJS.inheritable.scala_reflect_ManifestFactory$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_reflect_ManifestFactory$.prototype = ScalaJS.c.scala_reflect_ManifestFactory$.prototype;
ScalaJS.is.scala_reflect_ManifestFactory$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_reflect_ManifestFactory$)))
});
ScalaJS.as.scala_reflect_ManifestFactory$ = (function(obj) {
  if ((ScalaJS.is.scala_reflect_ManifestFactory$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.reflect.ManifestFactory")
  }
});
ScalaJS.isArrayOf.scala_reflect_ManifestFactory$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_reflect_ManifestFactory$)))
});
ScalaJS.asArrayOf.scala_reflect_ManifestFactory$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_reflect_ManifestFactory$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.reflect.ManifestFactory;", depth)
  }
});
ScalaJS.data.scala_reflect_ManifestFactory$ = new ScalaJS.ClassTypeData({
  scala_reflect_ManifestFactory$: 0
}, false, "scala.reflect.ManifestFactory$", ScalaJS.data.java_lang_Object, {
  scala_reflect_ManifestFactory$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_reflect_ManifestFactory$.prototype.$classData = ScalaJS.data.scala_reflect_ManifestFactory$;
ScalaJS.moduleInstances.scala_reflect_ManifestFactory = undefined;
ScalaJS.modules.scala_reflect_ManifestFactory = (function() {
  if ((!ScalaJS.moduleInstances.scala_reflect_ManifestFactory)) {
    ScalaJS.moduleInstances.scala_reflect_ManifestFactory = new ScalaJS.c.scala_reflect_ManifestFactory$().init___()
  };
  return ScalaJS.moduleInstances.scala_reflect_ManifestFactory
});
//@ sourceMappingURL=ManifestFactory$.js.map
