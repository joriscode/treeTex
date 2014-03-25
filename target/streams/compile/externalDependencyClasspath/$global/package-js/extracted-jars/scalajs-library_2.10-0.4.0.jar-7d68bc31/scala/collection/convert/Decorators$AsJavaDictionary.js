/** @constructor */
ScalaJS.c.scala_collection_convert_Decorators$AsJavaDictionary = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.m$1 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_convert_Decorators$AsJavaDictionary.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Decorators$AsJavaDictionary.prototype.constructor = ScalaJS.c.scala_collection_convert_Decorators$AsJavaDictionary;
ScalaJS.c.scala_collection_convert_Decorators$AsJavaDictionary.prototype.asJavaDictionary__Ljava_util_Dictionary = (function() {
  return ScalaJS.modules.scala_collection_JavaConversions().asJavaDictionary__Lscala_collection_mutable_Map__Ljava_util_Dictionary(this.m$1)
});
ScalaJS.c.scala_collection_convert_Decorators$AsJavaDictionary.prototype.scala$collection$convert$Decorators$AsJavaDictionary$$$outer__Lscala_collection_convert_Decorators = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_convert_Decorators$AsJavaDictionary.prototype.init___Lscala_collection_convert_Decorators__Lscala_collection_mutable_Map = (function($$outer, m) {
  this.m$1 = m;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Decorators$AsJavaDictionary.prototype.scala$collection$convert$Decorators$AsJavaDictionary$$$outer__ = (function() {
  return this.scala$collection$convert$Decorators$AsJavaDictionary$$$outer__Lscala_collection_convert_Decorators()
});
ScalaJS.c.scala_collection_convert_Decorators$AsJavaDictionary.prototype.asJavaDictionary__ = (function() {
  return this.asJavaDictionary__Ljava_util_Dictionary()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Decorators$AsJavaDictionary = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Decorators$AsJavaDictionary.prototype = ScalaJS.c.scala_collection_convert_Decorators$AsJavaDictionary.prototype;
ScalaJS.is.scala_collection_convert_Decorators$AsJavaDictionary = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Decorators$AsJavaDictionary)))
});
ScalaJS.as.scala_collection_convert_Decorators$AsJavaDictionary = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Decorators$AsJavaDictionary(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Decorators$AsJavaDictionary")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Decorators$AsJavaDictionary = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Decorators$AsJavaDictionary)))
});
ScalaJS.asArrayOf.scala_collection_convert_Decorators$AsJavaDictionary = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Decorators$AsJavaDictionary(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Decorators$AsJavaDictionary;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Decorators$AsJavaDictionary = new ScalaJS.ClassTypeData({
  scala_collection_convert_Decorators$AsJavaDictionary: 0
}, false, "scala.collection.convert.Decorators$AsJavaDictionary", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Decorators$AsJavaDictionary: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Decorators$AsJavaDictionary.prototype.$classData = ScalaJS.data.scala_collection_convert_Decorators$AsJavaDictionary;
//@ sourceMappingURL=Decorators$AsJavaDictionary.js.map
