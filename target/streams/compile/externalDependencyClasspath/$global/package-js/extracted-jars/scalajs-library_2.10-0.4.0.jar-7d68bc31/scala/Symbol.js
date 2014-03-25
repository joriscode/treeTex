/** @constructor */
ScalaJS.c.scala_Symbol = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.name$1 = null
});
ScalaJS.c.scala_Symbol.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Symbol.prototype.constructor = ScalaJS.c.scala_Symbol;
ScalaJS.c.scala_Symbol.prototype.name__T = (function() {
  return this.name$1
});
ScalaJS.c.scala_Symbol.prototype.toString__T = (function() {
  return ("'" + this.name__T())
});
ScalaJS.c.scala_Symbol.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_Symbol().apply__T__Lscala_Symbol(this.name__T())
});
ScalaJS.c.scala_Symbol.prototype.hashCode__I = (function() {
  return ScalaJS.objectHashCode(this.name__T())
});
ScalaJS.c.scala_Symbol.prototype.equals__O__Z = (function(other) {
  return (this === other)
});
ScalaJS.c.scala_Symbol.prototype.init___T = (function(name) {
  this.name$1 = name;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_Symbol.prototype.name__ = (function() {
  return this.name__T()
});
/** @constructor */
ScalaJS.inheritable.scala_Symbol = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Symbol.prototype = ScalaJS.c.scala_Symbol.prototype;
ScalaJS.is.scala_Symbol = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Symbol)))
});
ScalaJS.as.scala_Symbol = (function(obj) {
  if ((ScalaJS.is.scala_Symbol(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Symbol")
  }
});
ScalaJS.isArrayOf.scala_Symbol = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Symbol)))
});
ScalaJS.asArrayOf.scala_Symbol = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Symbol(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Symbol;", depth)
  }
});
ScalaJS.data.scala_Symbol = new ScalaJS.ClassTypeData({
  scala_Symbol: 0
}, false, "scala.Symbol", ScalaJS.data.java_lang_Object, {
  scala_Symbol: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Symbol.prototype.$classData = ScalaJS.data.scala_Symbol;
//@ sourceMappingURL=Symbol.js.map
