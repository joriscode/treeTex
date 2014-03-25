/** @constructor */
ScalaJS.c.scala_Tuple2$mcZC$sp = (function() {
  ScalaJS.c.scala_Tuple2.call(this);
  this.$$und1$mcZ$sp$f = false;
  this.$$und2$mcC$sp$f = 0
});
ScalaJS.c.scala_Tuple2$mcZC$sp.prototype = new ScalaJS.inheritable.scala_Tuple2();
ScalaJS.c.scala_Tuple2$mcZC$sp.prototype.constructor = ScalaJS.c.scala_Tuple2$mcZC$sp;
ScalaJS.c.scala_Tuple2$mcZC$sp.prototype.$$und1$mcZ$sp__Z = (function() {
  return this.$$und1$mcZ$sp$f
});
ScalaJS.c.scala_Tuple2$mcZC$sp.prototype.$$und1__Z = (function() {
  return this.$$und1$mcZ$sp__Z()
});
ScalaJS.c.scala_Tuple2$mcZC$sp.prototype.$$und2$mcC$sp__C = (function() {
  return this.$$und2$mcC$sp$f
});
ScalaJS.c.scala_Tuple2$mcZC$sp.prototype.$$und2__C = (function() {
  return this.$$und2$mcC$sp__C()
});
ScalaJS.c.scala_Tuple2$mcZC$sp.prototype.swap__Lscala_Tuple2 = (function() {
  return this.swap$mcZC$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2$mcZC$sp.prototype.swap$mcZC$sp__Lscala_Tuple2 = (function() {
  return new ScalaJS.c.scala_Tuple2$mcCZ$sp().init___C__Z(this.$$und2__C(), this.$$und1__Z())
});
ScalaJS.c.scala_Tuple2$mcZC$sp.prototype.copy$default$1__Z = (function() {
  return this.copy$default$1$mcZ$sp__Z()
});
ScalaJS.c.scala_Tuple2$mcZC$sp.prototype.copy$default$1$mcZ$sp__Z = (function() {
  return this.$$und1__Z()
});
ScalaJS.c.scala_Tuple2$mcZC$sp.prototype.copy$default$2__C = (function() {
  return this.copy$default$2$mcC$sp__C()
});
ScalaJS.c.scala_Tuple2$mcZC$sp.prototype.copy$default$2$mcC$sp__C = (function() {
  return this.$$und2__C()
});
ScalaJS.c.scala_Tuple2$mcZC$sp.prototype.specInstance$__Z = (function() {
  return true
});
ScalaJS.c.scala_Tuple2$mcZC$sp.prototype.copy$default$2__O = (function() {
  return ScalaJS.bC(this.copy$default$2__C())
});
ScalaJS.c.scala_Tuple2$mcZC$sp.prototype.copy$default$1__O = (function() {
  return ScalaJS.bZ(this.copy$default$1__Z())
});
ScalaJS.c.scala_Tuple2$mcZC$sp.prototype.$$und2__O = (function() {
  return ScalaJS.bC(this.$$und2__C())
});
ScalaJS.c.scala_Tuple2$mcZC$sp.prototype.$$und1__O = (function() {
  return ScalaJS.bZ(this.$$und1__Z())
});
ScalaJS.c.scala_Tuple2$mcZC$sp.prototype.init___Z__C = (function(_1$mcZ$sp, _2$mcC$sp) {
  this.$$und1$mcZ$sp$f = _1$mcZ$sp;
  this.$$und2$mcC$sp$f = _2$mcC$sp;
  ScalaJS.c.scala_Tuple2.prototype.init___O__O.call(this, null, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_Tuple2$mcZC$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Tuple2$mcZC$sp.prototype = ScalaJS.c.scala_Tuple2$mcZC$sp.prototype;
ScalaJS.is.scala_Tuple2$mcZC$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Tuple2$mcZC$sp)))
});
ScalaJS.as.scala_Tuple2$mcZC$sp = (function(obj) {
  if ((ScalaJS.is.scala_Tuple2$mcZC$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Tuple2$mcZC$sp")
  }
});
ScalaJS.isArrayOf.scala_Tuple2$mcZC$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Tuple2$mcZC$sp)))
});
ScalaJS.asArrayOf.scala_Tuple2$mcZC$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Tuple2$mcZC$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Tuple2$mcZC$sp;", depth)
  }
});
ScalaJS.data.scala_Tuple2$mcZC$sp = new ScalaJS.ClassTypeData({
  scala_Tuple2$mcZC$sp: 0
}, false, "scala.Tuple2$mcZC$sp", ScalaJS.data.scala_Tuple2, {
  scala_Tuple2$mcZC$sp: 1,
  scala_Tuple2: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product2: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Tuple2$mcZC$sp.prototype.$classData = ScalaJS.data.scala_Tuple2$mcZC$sp;
//@ sourceMappingURL=Tuple2$mcZC$sp.js.map
