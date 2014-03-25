/** @constructor */
ScalaJS.c.scala_collection_convert_Decorators$AsJavaEnumeration = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.i$1 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_convert_Decorators$AsJavaEnumeration.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Decorators$AsJavaEnumeration.prototype.constructor = ScalaJS.c.scala_collection_convert_Decorators$AsJavaEnumeration;
ScalaJS.c.scala_collection_convert_Decorators$AsJavaEnumeration.prototype.asJavaEnumeration__Ljava_util_Enumeration = (function() {
  return ScalaJS.modules.scala_collection_JavaConversions().asJavaEnumeration__Lscala_collection_Iterator__Ljava_util_Enumeration(this.i$1)
});
ScalaJS.c.scala_collection_convert_Decorators$AsJavaEnumeration.prototype.scala$collection$convert$Decorators$AsJavaEnumeration$$$outer__Lscala_collection_convert_Decorators = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_convert_Decorators$AsJavaEnumeration.prototype.init___Lscala_collection_convert_Decorators__Lscala_collection_Iterator = (function($$outer, i) {
  this.i$1 = i;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Decorators$AsJavaEnumeration.prototype.scala$collection$convert$Decorators$AsJavaEnumeration$$$outer__ = (function() {
  return this.scala$collection$convert$Decorators$AsJavaEnumeration$$$outer__Lscala_collection_convert_Decorators()
});
ScalaJS.c.scala_collection_convert_Decorators$AsJavaEnumeration.prototype.asJavaEnumeration__ = (function() {
  return this.asJavaEnumeration__Ljava_util_Enumeration()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Decorators$AsJavaEnumeration = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Decorators$AsJavaEnumeration.prototype = ScalaJS.c.scala_collection_convert_Decorators$AsJavaEnumeration.prototype;
ScalaJS.is.scala_collection_convert_Decorators$AsJavaEnumeration = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Decorators$AsJavaEnumeration)))
});
ScalaJS.as.scala_collection_convert_Decorators$AsJavaEnumeration = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Decorators$AsJavaEnumeration(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Decorators$AsJavaEnumeration")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Decorators$AsJavaEnumeration = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Decorators$AsJavaEnumeration)))
});
ScalaJS.asArrayOf.scala_collection_convert_Decorators$AsJavaEnumeration = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Decorators$AsJavaEnumeration(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Decorators$AsJavaEnumeration;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Decorators$AsJavaEnumeration = new ScalaJS.ClassTypeData({
  scala_collection_convert_Decorators$AsJavaEnumeration: 0
}, false, "scala.collection.convert.Decorators$AsJavaEnumeration", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Decorators$AsJavaEnumeration: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Decorators$AsJavaEnumeration.prototype.$classData = ScalaJS.data.scala_collection_convert_Decorators$AsJavaEnumeration;
//@ sourceMappingURL=Decorators$AsJavaEnumeration.js.map
