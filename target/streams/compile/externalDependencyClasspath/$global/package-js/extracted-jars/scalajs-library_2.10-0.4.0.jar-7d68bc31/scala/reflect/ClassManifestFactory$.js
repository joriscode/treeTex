/** @constructor */
ScalaJS.c.scala_reflect_ClassManifestFactory$ = (function() {
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
  this.Any$1 = null;
  this.Object$1 = null;
  this.AnyVal$1 = null;
  this.Nothing$1 = null;
  this.Null$1 = null
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.constructor = ScalaJS.c.scala_reflect_ClassManifestFactory$;
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.Byte__Lscala_reflect_AnyValManifest = (function() {
  return this.Byte$1
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.Short__Lscala_reflect_AnyValManifest = (function() {
  return this.Short$1
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.Char__Lscala_reflect_AnyValManifest = (function() {
  return this.Char$1
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.Int__Lscala_reflect_AnyValManifest = (function() {
  return this.Int$1
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.Long__Lscala_reflect_AnyValManifest = (function() {
  return this.Long$1
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.Float__Lscala_reflect_AnyValManifest = (function() {
  return this.Float$1
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.Double__Lscala_reflect_AnyValManifest = (function() {
  return this.Double$1
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.Boolean__Lscala_reflect_AnyValManifest = (function() {
  return this.Boolean$1
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.Unit__Lscala_reflect_AnyValManifest = (function() {
  return this.Unit$1
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.Any__Lscala_reflect_Manifest = (function() {
  return this.Any$1
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.Object__Lscala_reflect_Manifest = (function() {
  return this.Object$1
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.AnyVal__Lscala_reflect_Manifest = (function() {
  return this.AnyVal$1
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.Nothing__Lscala_reflect_Manifest = (function() {
  return this.Nothing$1
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.Null__Lscala_reflect_Manifest = (function() {
  return this.Null$1
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.fromClass__Ljava_lang_Class__Lscala_reflect_ClassTag = (function(clazz) {
  var x1 = clazz;
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_Byte().TYPE__Ljava_lang_Class(), x1)) {
    return this.Byte__Lscala_reflect_AnyValManifest()
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_Short().TYPE__Ljava_lang_Class(), x1)) {
    return this.Short__Lscala_reflect_AnyValManifest()
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_Character().TYPE__Ljava_lang_Class(), x1)) {
    return this.Char__Lscala_reflect_AnyValManifest()
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_Integer().TYPE__Ljava_lang_Class(), x1)) {
    return this.Int__Lscala_reflect_AnyValManifest()
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_Long().TYPE__Ljava_lang_Class(), x1)) {
    return this.Long__Lscala_reflect_AnyValManifest()
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_Float().TYPE__Ljava_lang_Class(), x1)) {
    return this.Float__Lscala_reflect_AnyValManifest()
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_Double().TYPE__Ljava_lang_Class(), x1)) {
    return this.Double__Lscala_reflect_AnyValManifest()
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_Boolean().TYPE__Ljava_lang_Class(), x1)) {
    return this.Boolean__Lscala_reflect_AnyValManifest()
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_Void().TYPE__Ljava_lang_Class(), x1)) {
    return this.Unit__Lscala_reflect_AnyValManifest()
  };
  return this.classType__Ljava_lang_Class__Lscala_reflect_ClassTag(clazz)
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.singleType__O__Lscala_reflect_Manifest = (function(value) {
  return ScalaJS.modules.scala_reflect_package().Manifest__Lscala_reflect_ManifestFactory$().singleType__O__Lscala_reflect_Manifest(value)
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.classType__Ljava_lang_Class__Lscala_reflect_ClassTag = (function(clazz) {
  return new ScalaJS.c.scala_reflect_ClassTypeManifest().init___Lscala_Option__Ljava_lang_Class__Lscala_collection_immutable_List(ScalaJS.modules.scala_None(), clazz, ScalaJS.modules.scala_collection_immutable_Nil())
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.classType__Ljava_lang_Class__Lscala_reflect_OptManifest__Lscala_collection_Seq__Lscala_reflect_ClassTag = (function(clazz, arg1, args) {
  var jsx$4 = new ScalaJS.c.scala_reflect_ClassTypeManifest();
  var jsx$3 = ScalaJS.modules.scala_None();
  var jsx$2 = clazz;
  var x$1 = arg1;
  var jsx$1 = args.toList__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(x$1);
  return jsx$4.init___Lscala_Option__Ljava_lang_Class__Lscala_collection_immutable_List(jsx$3, jsx$2, jsx$1)
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.classType__Lscala_reflect_OptManifest__Ljava_lang_Class__Lscala_collection_Seq__Lscala_reflect_ClassTag = (function(prefix, clazz, args) {
  return new ScalaJS.c.scala_reflect_ClassTypeManifest().init___Lscala_Option__Ljava_lang_Class__Lscala_collection_immutable_List(new ScalaJS.c.scala_Some().init___O(prefix), clazz, args.toList__Lscala_collection_immutable_List())
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.arrayType__Lscala_reflect_OptManifest__Lscala_reflect_ClassTag = (function(arg) {
  var x1 = arg;
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_reflect_NoManifest(), x1)) {
    return this.Object__Lscala_reflect_Manifest()
  };
  if (ScalaJS.is.scala_reflect_ClassTag(x1)) {
    var x3 = ScalaJS.as.scala_reflect_ClassTag(x1);
    return x3.arrayManifest__Lscala_reflect_ClassTag()
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.abstractType__Lscala_reflect_OptManifest__T__Ljava_lang_Class__Lscala_collection_Seq__Lscala_reflect_ClassTag = (function(prefix, name, clazz, args) {
  return new ScalaJS.c.scala_reflect_ClassManifestFactory$$anon$1().init___Lscala_reflect_OptManifest__T__Ljava_lang_Class__Lscala_collection_Seq(prefix, name, clazz, args)
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.abstractType__Lscala_reflect_OptManifest__T__Lscala_reflect_ClassTag__Lscala_collection_Seq__Lscala_reflect_ClassTag = (function(prefix, name, upperbound, args) {
  return new ScalaJS.c.scala_reflect_ClassManifestFactory$$anon$2().init___Lscala_reflect_OptManifest__T__Lscala_reflect_ClassTag__Lscala_collection_Seq(prefix, name, upperbound, args)
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_reflect_ClassManifestFactory = this;
  this.Byte$1 = ScalaJS.modules.scala_reflect_ManifestFactory().Byte__Lscala_reflect_AnyValManifest();
  this.Short$1 = ScalaJS.modules.scala_reflect_ManifestFactory().Short__Lscala_reflect_AnyValManifest();
  this.Char$1 = ScalaJS.modules.scala_reflect_ManifestFactory().Char__Lscala_reflect_AnyValManifest();
  this.Int$1 = ScalaJS.modules.scala_reflect_ManifestFactory().Int__Lscala_reflect_AnyValManifest();
  this.Long$1 = ScalaJS.modules.scala_reflect_ManifestFactory().Long__Lscala_reflect_AnyValManifest();
  this.Float$1 = ScalaJS.modules.scala_reflect_ManifestFactory().Float__Lscala_reflect_AnyValManifest();
  this.Double$1 = ScalaJS.modules.scala_reflect_ManifestFactory().Double__Lscala_reflect_AnyValManifest();
  this.Boolean$1 = ScalaJS.modules.scala_reflect_ManifestFactory().Boolean__Lscala_reflect_AnyValManifest();
  this.Unit$1 = ScalaJS.modules.scala_reflect_ManifestFactory().Unit__Lscala_reflect_AnyValManifest();
  this.Any$1 = ScalaJS.modules.scala_reflect_ManifestFactory().Any__Lscala_reflect_Manifest();
  this.Object$1 = ScalaJS.modules.scala_reflect_ManifestFactory().Object__Lscala_reflect_Manifest();
  this.AnyVal$1 = ScalaJS.modules.scala_reflect_ManifestFactory().AnyVal__Lscala_reflect_Manifest();
  this.Nothing$1 = ScalaJS.modules.scala_reflect_ManifestFactory().Nothing__Lscala_reflect_Manifest();
  this.Null$1 = ScalaJS.modules.scala_reflect_ManifestFactory().Null__Lscala_reflect_Manifest();
  return this
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.abstractType__Lscala_reflect_OptManifest__T__Lscala_reflect_ClassTag__Lscala_collection_Seq__ = (function(prefix, name, upperbound, args) {
  return this.abstractType__Lscala_reflect_OptManifest__T__Lscala_reflect_ClassTag__Lscala_collection_Seq__Lscala_reflect_ClassTag(prefix, name, upperbound, args)
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.abstractType__Lscala_reflect_OptManifest__T__Ljava_lang_Class__Lscala_collection_Seq__ = (function(prefix$2, name$2, clazz, args$2) {
  return this.abstractType__Lscala_reflect_OptManifest__T__Ljava_lang_Class__Lscala_collection_Seq__Lscala_reflect_ClassTag(prefix$2, name$2, clazz, args$2)
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.arrayType__Lscala_reflect_OptManifest__ = (function(arg) {
  return this.arrayType__Lscala_reflect_OptManifest__Lscala_reflect_ClassTag(arg)
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.classType__Lscala_reflect_OptManifest__Ljava_lang_Class__Lscala_collection_Seq__ = (function(prefix$3, clazz$2, args$3) {
  return this.classType__Lscala_reflect_OptManifest__Ljava_lang_Class__Lscala_collection_Seq__Lscala_reflect_ClassTag(prefix$3, clazz$2, args$3)
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.classType__Ljava_lang_Class__Lscala_reflect_OptManifest__Lscala_collection_Seq__ = (function(clazz$3, arg1, args$4) {
  return this.classType__Ljava_lang_Class__Lscala_reflect_OptManifest__Lscala_collection_Seq__Lscala_reflect_ClassTag(clazz$3, arg1, args$4)
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.classType__Ljava_lang_Class__ = (function(clazz$4) {
  return this.classType__Ljava_lang_Class__Lscala_reflect_ClassTag(clazz$4)
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.singleType__O__ = (function(value) {
  return this.singleType__O__Lscala_reflect_Manifest(value)
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.fromClass__Ljava_lang_Class__ = (function(clazz$5) {
  return this.fromClass__Ljava_lang_Class__Lscala_reflect_ClassTag(clazz$5)
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.Null__ = (function() {
  return this.Null__Lscala_reflect_Manifest()
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.Nothing__ = (function() {
  return this.Nothing__Lscala_reflect_Manifest()
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.AnyVal__ = (function() {
  return this.AnyVal__Lscala_reflect_Manifest()
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.Object__ = (function() {
  return this.Object__Lscala_reflect_Manifest()
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.Any__ = (function() {
  return this.Any__Lscala_reflect_Manifest()
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.Unit__ = (function() {
  return this.Unit__Lscala_reflect_AnyValManifest()
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.Boolean__ = (function() {
  return this.Boolean__Lscala_reflect_AnyValManifest()
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.Double__ = (function() {
  return this.Double__Lscala_reflect_AnyValManifest()
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.Float__ = (function() {
  return this.Float__Lscala_reflect_AnyValManifest()
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.Long__ = (function() {
  return this.Long__Lscala_reflect_AnyValManifest()
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.Int__ = (function() {
  return this.Int__Lscala_reflect_AnyValManifest()
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.Char__ = (function() {
  return this.Char__Lscala_reflect_AnyValManifest()
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.Short__ = (function() {
  return this.Short__Lscala_reflect_AnyValManifest()
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.Byte__ = (function() {
  return this.Byte__Lscala_reflect_AnyValManifest()
});
/** @constructor */
ScalaJS.inheritable.scala_reflect_ClassManifestFactory$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_reflect_ClassManifestFactory$.prototype = ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype;
ScalaJS.is.scala_reflect_ClassManifestFactory$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_reflect_ClassManifestFactory$)))
});
ScalaJS.as.scala_reflect_ClassManifestFactory$ = (function(obj) {
  if ((ScalaJS.is.scala_reflect_ClassManifestFactory$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.reflect.ClassManifestFactory")
  }
});
ScalaJS.isArrayOf.scala_reflect_ClassManifestFactory$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_reflect_ClassManifestFactory$)))
});
ScalaJS.asArrayOf.scala_reflect_ClassManifestFactory$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_reflect_ClassManifestFactory$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.reflect.ClassManifestFactory;", depth)
  }
});
ScalaJS.data.scala_reflect_ClassManifestFactory$ = new ScalaJS.ClassTypeData({
  scala_reflect_ClassManifestFactory$: 0
}, false, "scala.reflect.ClassManifestFactory$", ScalaJS.data.java_lang_Object, {
  scala_reflect_ClassManifestFactory$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_reflect_ClassManifestFactory$.prototype.$classData = ScalaJS.data.scala_reflect_ClassManifestFactory$;
ScalaJS.moduleInstances.scala_reflect_ClassManifestFactory = undefined;
ScalaJS.modules.scala_reflect_ClassManifestFactory = (function() {
  if ((!ScalaJS.moduleInstances.scala_reflect_ClassManifestFactory)) {
    ScalaJS.moduleInstances.scala_reflect_ClassManifestFactory = new ScalaJS.c.scala_reflect_ClassManifestFactory$().init___()
  };
  return ScalaJS.moduleInstances.scala_reflect_ClassManifestFactory
});
//@ sourceMappingURL=ClassManifestFactory$.js.map
