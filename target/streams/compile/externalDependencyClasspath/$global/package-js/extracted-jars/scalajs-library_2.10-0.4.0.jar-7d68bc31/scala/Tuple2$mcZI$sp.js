/** @constructor */
ScalaJS.c.scala_Tuple2$mcZI$sp = (function() {
  ScalaJS.c.scala_Tuple2.call(this);
  this.$$und1$mcZ$sp$f = false;
  this.$$und2$mcI$sp$f = 0
});
ScalaJS.c.scala_Tuple2$mcZI$sp.prototype = new ScalaJS.inheritable.scala_Tuple2();
ScalaJS.c.scala_Tuple2$mcZI$sp.prototype.constructor = ScalaJS.c.scala_Tuple2$mcZI$sp;
ScalaJS.c.scala_Tuple2$mcZI$sp.prototype.$$und1$mcZ$sp__Z = (function() {
  return this.$$und1$mcZ$sp$f
});
ScalaJS.c.scala_Tuple2$mcZI$sp.prototype.$$und1__Z = (function() {
  return this.$$und1$mcZ$sp__Z()
});
ScalaJS.c.scala_Tuple2$mcZI$sp.prototype.$$und2$mcI$sp__I = (function() {
  return this.$$und2$mcI$sp$f
});
ScalaJS.c.scala_Tuple2$mcZI$sp.prototype.$$und2__I = (function() {
  return this.$$und2$mcI$sp__I()
});
ScalaJS.c.scala_Tuple2$mcZI$sp.prototype.swap__Lscala_Tuple2 = (function() {
  return this.swap$mcZI$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2$mcZI$sp.prototype.swap$mcZI$sp__Lscala_Tuple2 = (function() {
  return new ScalaJS.c.scala_Tuple2$mcIZ$sp().init___I__Z(this.$$und2__I(), this.$$und1__Z())
});
ScalaJS.c.scala_Tuple2$mcZI$sp.prototype.copy$default$1__Z = (function() {
  return this.copy$default$1$mcZ$sp__Z()
});
ScalaJS.c.scala_Tuple2$mcZI$sp.prototype.copy$default$1$mcZ$sp__Z = (function() {
  return this.$$und1__Z()
});
ScalaJS.c.scala_Tuple2$mcZI$sp.prototype.copy$default$2__I = (function() {
  return this.copy$default$2$mcI$sp__I()
});
ScalaJS.c.scala_Tuple2$mcZI$sp.prototype.copy$default$2$mcI$sp__I = (function() {
  return this.$$und2__I()
});
ScalaJS.c.scala_Tuple2$mcZI$sp.prototype.specInstance$__Z = (function() {
  return true
});
ScalaJS.c.scala_Tuple2$mcZI$sp.prototype.copy$default$2__O = (function() {
  return ScalaJS.bI(this.copy$default$2__I())
});
ScalaJS.c.scala_Tuple2$mcZI$sp.prototype.copy$default$1__O = (function() {
  return ScalaJS.bZ(this.copy$default$1__Z())
});
ScalaJS.c.scala_Tuple2$mcZI$sp.prototype.$$und2__O = (function() {
  return ScalaJS.bI(this.$$und2__I())
});
ScalaJS.c.scala_Tuple2$mcZI$sp.prototype.$$und1__O = (function() {
  return ScalaJS.bZ(this.$$und1__Z())
});
ScalaJS.c.scala_Tuple2$mcZI$sp.prototype.init___Z__I = (function(_1$mcZ$sp, _2$mcI$sp) {
  this.$$und1$mcZ$sp$f = _1$mcZ$sp;
  this.$$und2$mcI$sp$f = _2$mcI$sp;
  ScalaJS.c.scala_Tuple2.prototype.init___O__O.call(this, null, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_Tuple2$mcZI$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Tuple2$mcZI$sp.prototype = ScalaJS.c.scala_Tuple2$mcZI$sp.prototype;
ScalaJS.is.scala_Tuple2$mcZI$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Tuple2$mcZI$sp)))
});
ScalaJS.as.scala_Tuple2$mcZI$sp = (function(obj) {
  if ((ScalaJS.is.scala_Tuple2$mcZI$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Tuple2$mcZI$sp")
  }
});
ScalaJS.isArrayOf.scala_Tuple2$mcZI$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Tuple2$mcZI$sp)))
});
ScalaJS.asArrayOf.scala_Tuple2$mcZI$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Tuple2$mcZI$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Tuple2$mcZI$sp;", depth)
  }
});
ScalaJS.data.scala_Tuple2$mcZI$sp = new ScalaJS.ClassTypeData({
  scala_Tuple2$mcZI$sp: 0
}, false, "scala.Tuple2$mcZI$sp", ScalaJS.data.scala_Tuple2, {
  scala_Tuple2$mcZI$sp: 1,
  scala_Tuple2: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product2: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Tuple2$mcZI$sp.prototype.$classData = ScalaJS.data.scala_Tuple2$mcZI$sp;
//@ sourceMappingURL=Tuple2$mcZI$sp.js.map
