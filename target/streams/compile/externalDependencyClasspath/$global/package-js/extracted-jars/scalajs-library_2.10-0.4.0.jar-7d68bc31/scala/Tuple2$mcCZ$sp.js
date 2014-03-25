/** @constructor */
ScalaJS.c.scala_Tuple2$mcCZ$sp = (function() {
  ScalaJS.c.scala_Tuple2.call(this);
  this.$$und1$mcC$sp$f = 0;
  this.$$und2$mcZ$sp$f = false
});
ScalaJS.c.scala_Tuple2$mcCZ$sp.prototype = new ScalaJS.inheritable.scala_Tuple2();
ScalaJS.c.scala_Tuple2$mcCZ$sp.prototype.constructor = ScalaJS.c.scala_Tuple2$mcCZ$sp;
ScalaJS.c.scala_Tuple2$mcCZ$sp.prototype.$$und1$mcC$sp__C = (function() {
  return this.$$und1$mcC$sp$f
});
ScalaJS.c.scala_Tuple2$mcCZ$sp.prototype.$$und1__C = (function() {
  return this.$$und1$mcC$sp__C()
});
ScalaJS.c.scala_Tuple2$mcCZ$sp.prototype.$$und2$mcZ$sp__Z = (function() {
  return this.$$und2$mcZ$sp$f
});
ScalaJS.c.scala_Tuple2$mcCZ$sp.prototype.$$und2__Z = (function() {
  return this.$$und2$mcZ$sp__Z()
});
ScalaJS.c.scala_Tuple2$mcCZ$sp.prototype.swap__Lscala_Tuple2 = (function() {
  return this.swap$mcCZ$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2$mcCZ$sp.prototype.swap$mcCZ$sp__Lscala_Tuple2 = (function() {
  return new ScalaJS.c.scala_Tuple2$mcZC$sp().init___Z__C(this.$$und2__Z(), this.$$und1__C())
});
ScalaJS.c.scala_Tuple2$mcCZ$sp.prototype.copy$default$1__C = (function() {
  return this.copy$default$1$mcC$sp__C()
});
ScalaJS.c.scala_Tuple2$mcCZ$sp.prototype.copy$default$1$mcC$sp__C = (function() {
  return this.$$und1__C()
});
ScalaJS.c.scala_Tuple2$mcCZ$sp.prototype.copy$default$2__Z = (function() {
  return this.copy$default$2$mcZ$sp__Z()
});
ScalaJS.c.scala_Tuple2$mcCZ$sp.prototype.copy$default$2$mcZ$sp__Z = (function() {
  return this.$$und2__Z()
});
ScalaJS.c.scala_Tuple2$mcCZ$sp.prototype.specInstance$__Z = (function() {
  return true
});
ScalaJS.c.scala_Tuple2$mcCZ$sp.prototype.copy$default$2__O = (function() {
  return ScalaJS.bZ(this.copy$default$2__Z())
});
ScalaJS.c.scala_Tuple2$mcCZ$sp.prototype.copy$default$1__O = (function() {
  return ScalaJS.bC(this.copy$default$1__C())
});
ScalaJS.c.scala_Tuple2$mcCZ$sp.prototype.$$und2__O = (function() {
  return ScalaJS.bZ(this.$$und2__Z())
});
ScalaJS.c.scala_Tuple2$mcCZ$sp.prototype.$$und1__O = (function() {
  return ScalaJS.bC(this.$$und1__C())
});
ScalaJS.c.scala_Tuple2$mcCZ$sp.prototype.init___C__Z = (function(_1$mcC$sp, _2$mcZ$sp) {
  this.$$und1$mcC$sp$f = _1$mcC$sp;
  this.$$und2$mcZ$sp$f = _2$mcZ$sp;
  ScalaJS.c.scala_Tuple2.prototype.init___O__O.call(this, null, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_Tuple2$mcCZ$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Tuple2$mcCZ$sp.prototype = ScalaJS.c.scala_Tuple2$mcCZ$sp.prototype;
ScalaJS.is.scala_Tuple2$mcCZ$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Tuple2$mcCZ$sp)))
});
ScalaJS.as.scala_Tuple2$mcCZ$sp = (function(obj) {
  if ((ScalaJS.is.scala_Tuple2$mcCZ$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Tuple2$mcCZ$sp")
  }
});
ScalaJS.isArrayOf.scala_Tuple2$mcCZ$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Tuple2$mcCZ$sp)))
});
ScalaJS.asArrayOf.scala_Tuple2$mcCZ$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Tuple2$mcCZ$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Tuple2$mcCZ$sp;", depth)
  }
});
ScalaJS.data.scala_Tuple2$mcCZ$sp = new ScalaJS.ClassTypeData({
  scala_Tuple2$mcCZ$sp: 0
}, false, "scala.Tuple2$mcCZ$sp", ScalaJS.data.scala_Tuple2, {
  scala_Tuple2$mcCZ$sp: 1,
  scala_Tuple2: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product2: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Tuple2$mcCZ$sp.prototype.$classData = ScalaJS.data.scala_Tuple2$mcCZ$sp;
//@ sourceMappingURL=Tuple2$mcCZ$sp.js.map
