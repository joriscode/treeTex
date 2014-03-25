/** @constructor */
ScalaJS.c.scala_collection_convert_Decorators$AsJava = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.op$1 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_convert_Decorators$AsJava.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Decorators$AsJava.prototype.constructor = ScalaJS.c.scala_collection_convert_Decorators$AsJava;
ScalaJS.c.scala_collection_convert_Decorators$AsJava.prototype.asJava__O = (function() {
  return this.op$1.apply__O()
});
ScalaJS.c.scala_collection_convert_Decorators$AsJava.prototype.scala$collection$convert$Decorators$AsJava$$$outer__Lscala_collection_convert_Decorators = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_convert_Decorators$AsJava.prototype.init___Lscala_collection_convert_Decorators__Lscala_Function0 = (function($$outer, op) {
  this.op$1 = op;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Decorators$AsJava.prototype.scala$collection$convert$Decorators$AsJava$$$outer__ = (function() {
  return this.scala$collection$convert$Decorators$AsJava$$$outer__Lscala_collection_convert_Decorators()
});
ScalaJS.c.scala_collection_convert_Decorators$AsJava.prototype.asJava__ = (function() {
  return this.asJava__O()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Decorators$AsJava = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Decorators$AsJava.prototype = ScalaJS.c.scala_collection_convert_Decorators$AsJava.prototype;
ScalaJS.is.scala_collection_convert_Decorators$AsJava = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Decorators$AsJava)))
});
ScalaJS.as.scala_collection_convert_Decorators$AsJava = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Decorators$AsJava(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Decorators$AsJava")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Decorators$AsJava = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Decorators$AsJava)))
});
ScalaJS.asArrayOf.scala_collection_convert_Decorators$AsJava = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Decorators$AsJava(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Decorators$AsJava;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Decorators$AsJava = new ScalaJS.ClassTypeData({
  scala_collection_convert_Decorators$AsJava: 0
}, false, "scala.collection.convert.Decorators$AsJava", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Decorators$AsJava: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Decorators$AsJava.prototype.$classData = ScalaJS.data.scala_collection_convert_Decorators$AsJava;
//@ sourceMappingURL=Decorators$AsJava.js.map
