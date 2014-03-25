/** @constructor */
ScalaJS.c.scala_collection_convert_Decorators$AsJavaCollection = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.i$1 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_convert_Decorators$AsJavaCollection.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Decorators$AsJavaCollection.prototype.constructor = ScalaJS.c.scala_collection_convert_Decorators$AsJavaCollection;
ScalaJS.c.scala_collection_convert_Decorators$AsJavaCollection.prototype.asJavaCollection__Ljava_util_Collection = (function() {
  return ScalaJS.modules.scala_collection_JavaConversions().asJavaCollection__Lscala_collection_Iterable__Ljava_util_Collection(this.i$1)
});
ScalaJS.c.scala_collection_convert_Decorators$AsJavaCollection.prototype.scala$collection$convert$Decorators$AsJavaCollection$$$outer__Lscala_collection_convert_Decorators = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_convert_Decorators$AsJavaCollection.prototype.init___Lscala_collection_convert_Decorators__Lscala_collection_Iterable = (function($$outer, i) {
  this.i$1 = i;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Decorators$AsJavaCollection.prototype.scala$collection$convert$Decorators$AsJavaCollection$$$outer__ = (function() {
  return this.scala$collection$convert$Decorators$AsJavaCollection$$$outer__Lscala_collection_convert_Decorators()
});
ScalaJS.c.scala_collection_convert_Decorators$AsJavaCollection.prototype.asJavaCollection__ = (function() {
  return this.asJavaCollection__Ljava_util_Collection()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Decorators$AsJavaCollection = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Decorators$AsJavaCollection.prototype = ScalaJS.c.scala_collection_convert_Decorators$AsJavaCollection.prototype;
ScalaJS.is.scala_collection_convert_Decorators$AsJavaCollection = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Decorators$AsJavaCollection)))
});
ScalaJS.as.scala_collection_convert_Decorators$AsJavaCollection = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Decorators$AsJavaCollection(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Decorators$AsJavaCollection")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Decorators$AsJavaCollection = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Decorators$AsJavaCollection)))
});
ScalaJS.asArrayOf.scala_collection_convert_Decorators$AsJavaCollection = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Decorators$AsJavaCollection(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Decorators$AsJavaCollection;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Decorators$AsJavaCollection = new ScalaJS.ClassTypeData({
  scala_collection_convert_Decorators$AsJavaCollection: 0
}, false, "scala.collection.convert.Decorators$AsJavaCollection", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Decorators$AsJavaCollection: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Decorators$AsJavaCollection.prototype.$classData = ScalaJS.data.scala_collection_convert_Decorators$AsJavaCollection;
//@ sourceMappingURL=Decorators$AsJavaCollection.js.map
