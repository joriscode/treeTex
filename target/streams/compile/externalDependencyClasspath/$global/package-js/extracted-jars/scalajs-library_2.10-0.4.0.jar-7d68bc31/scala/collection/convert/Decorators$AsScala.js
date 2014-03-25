/** @constructor */
ScalaJS.c.scala_collection_convert_Decorators$AsScala = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.op$1 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_convert_Decorators$AsScala.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Decorators$AsScala.prototype.constructor = ScalaJS.c.scala_collection_convert_Decorators$AsScala;
ScalaJS.c.scala_collection_convert_Decorators$AsScala.prototype.asScala__O = (function() {
  return this.op$1.apply__O()
});
ScalaJS.c.scala_collection_convert_Decorators$AsScala.prototype.scala$collection$convert$Decorators$AsScala$$$outer__Lscala_collection_convert_Decorators = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_convert_Decorators$AsScala.prototype.init___Lscala_collection_convert_Decorators__Lscala_Function0 = (function($$outer, op) {
  this.op$1 = op;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Decorators$AsScala.prototype.scala$collection$convert$Decorators$AsScala$$$outer__ = (function() {
  return this.scala$collection$convert$Decorators$AsScala$$$outer__Lscala_collection_convert_Decorators()
});
ScalaJS.c.scala_collection_convert_Decorators$AsScala.prototype.asScala__ = (function() {
  return this.asScala__O()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Decorators$AsScala = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Decorators$AsScala.prototype = ScalaJS.c.scala_collection_convert_Decorators$AsScala.prototype;
ScalaJS.is.scala_collection_convert_Decorators$AsScala = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Decorators$AsScala)))
});
ScalaJS.as.scala_collection_convert_Decorators$AsScala = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Decorators$AsScala(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Decorators$AsScala")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Decorators$AsScala = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Decorators$AsScala)))
});
ScalaJS.asArrayOf.scala_collection_convert_Decorators$AsScala = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Decorators$AsScala(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Decorators$AsScala;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Decorators$AsScala = new ScalaJS.ClassTypeData({
  scala_collection_convert_Decorators$AsScala: 0
}, false, "scala.collection.convert.Decorators$AsScala", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Decorators$AsScala: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Decorators$AsScala.prototype.$classData = ScalaJS.data.scala_collection_convert_Decorators$AsScala;
//@ sourceMappingURL=Decorators$AsScala.js.map
