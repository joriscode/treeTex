/** @constructor */
ScalaJS.c.scala_Tuple2$mcII$sp = (function() {
  ScalaJS.c.scala_Tuple2.call(this);
  this.$$und1$mcI$sp$f = 0;
  this.$$und2$mcI$sp$f = 0
});
ScalaJS.c.scala_Tuple2$mcII$sp.prototype = new ScalaJS.inheritable.scala_Tuple2();
ScalaJS.c.scala_Tuple2$mcII$sp.prototype.constructor = ScalaJS.c.scala_Tuple2$mcII$sp;
ScalaJS.c.scala_Tuple2$mcII$sp.prototype.$$und1$mcI$sp__I = (function() {
  return this.$$und1$mcI$sp$f
});
ScalaJS.c.scala_Tuple2$mcII$sp.prototype.$$und1__I = (function() {
  return this.$$und1$mcI$sp__I()
});
ScalaJS.c.scala_Tuple2$mcII$sp.prototype.$$und2$mcI$sp__I = (function() {
  return this.$$und2$mcI$sp$f
});
ScalaJS.c.scala_Tuple2$mcII$sp.prototype.$$und2__I = (function() {
  return this.$$und2$mcI$sp__I()
});
ScalaJS.c.scala_Tuple2$mcII$sp.prototype.swap__Lscala_Tuple2 = (function() {
  return this.swap$mcII$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2$mcII$sp.prototype.swap$mcII$sp__Lscala_Tuple2 = (function() {
  return new ScalaJS.c.scala_Tuple2$mcII$sp().init___I__I(this.$$und2__I(), this.$$und1__I())
});
ScalaJS.c.scala_Tuple2$mcII$sp.prototype.copy$default$1__I = (function() {
  return this.copy$default$1$mcI$sp__I()
});
ScalaJS.c.scala_Tuple2$mcII$sp.prototype.copy$default$1$mcI$sp__I = (function() {
  return this.$$und1__I()
});
ScalaJS.c.scala_Tuple2$mcII$sp.prototype.copy$default$2__I = (function() {
  return this.copy$default$2$mcI$sp__I()
});
ScalaJS.c.scala_Tuple2$mcII$sp.prototype.copy$default$2$mcI$sp__I = (function() {
  return this.$$und2__I()
});
ScalaJS.c.scala_Tuple2$mcII$sp.prototype.specInstance$__Z = (function() {
  return true
});
ScalaJS.c.scala_Tuple2$mcII$sp.prototype.copy$default$2__O = (function() {
  return ScalaJS.bI(this.copy$default$2__I())
});
ScalaJS.c.scala_Tuple2$mcII$sp.prototype.copy$default$1__O = (function() {
  return ScalaJS.bI(this.copy$default$1__I())
});
ScalaJS.c.scala_Tuple2$mcII$sp.prototype.$$und2__O = (function() {
  return ScalaJS.bI(this.$$und2__I())
});
ScalaJS.c.scala_Tuple2$mcII$sp.prototype.$$und1__O = (function() {
  return ScalaJS.bI(this.$$und1__I())
});
ScalaJS.c.scala_Tuple2$mcII$sp.prototype.init___I__I = (function(_1$mcI$sp, _2$mcI$sp) {
  this.$$und1$mcI$sp$f = _1$mcI$sp;
  this.$$und2$mcI$sp$f = _2$mcI$sp;
  ScalaJS.c.scala_Tuple2.prototype.init___O__O.call(this, null, null);
  ScalaJS.impls.scala_Product2$mcII$sp$class__$init$__Lscala_Product2$mcII$sp__V(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_Tuple2$mcII$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Tuple2$mcII$sp.prototype = ScalaJS.c.scala_Tuple2$mcII$sp.prototype;
ScalaJS.is.scala_Tuple2$mcII$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Tuple2$mcII$sp)))
});
ScalaJS.as.scala_Tuple2$mcII$sp = (function(obj) {
  if ((ScalaJS.is.scala_Tuple2$mcII$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Tuple2$mcII$sp")
  }
});
ScalaJS.isArrayOf.scala_Tuple2$mcII$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Tuple2$mcII$sp)))
});
ScalaJS.asArrayOf.scala_Tuple2$mcII$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Tuple2$mcII$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Tuple2$mcII$sp;", depth)
  }
});
ScalaJS.data.scala_Tuple2$mcII$sp = new ScalaJS.ClassTypeData({
  scala_Tuple2$mcII$sp: 0
}, false, "scala.Tuple2$mcII$sp", ScalaJS.data.scala_Tuple2, {
  scala_Tuple2$mcII$sp: 1,
  scala_Product2$mcII$sp: 1,
  scala_Tuple2: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product2: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Tuple2$mcII$sp.prototype.$classData = ScalaJS.data.scala_Tuple2$mcII$sp;
//@ sourceMappingURL=Tuple2$mcII$sp.js.map
