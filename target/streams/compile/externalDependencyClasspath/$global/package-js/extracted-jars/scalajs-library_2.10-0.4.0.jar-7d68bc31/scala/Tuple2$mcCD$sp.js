/** @constructor */
ScalaJS.c.scala_Tuple2$mcCD$sp = (function() {
  ScalaJS.c.scala_Tuple2.call(this);
  this.$$und1$mcC$sp$f = 0;
  this.$$und2$mcD$sp$f = 0.0
});
ScalaJS.c.scala_Tuple2$mcCD$sp.prototype = new ScalaJS.inheritable.scala_Tuple2();
ScalaJS.c.scala_Tuple2$mcCD$sp.prototype.constructor = ScalaJS.c.scala_Tuple2$mcCD$sp;
ScalaJS.c.scala_Tuple2$mcCD$sp.prototype.$$und1$mcC$sp__C = (function() {
  return this.$$und1$mcC$sp$f
});
ScalaJS.c.scala_Tuple2$mcCD$sp.prototype.$$und1__C = (function() {
  return this.$$und1$mcC$sp__C()
});
ScalaJS.c.scala_Tuple2$mcCD$sp.prototype.$$und2$mcD$sp__D = (function() {
  return this.$$und2$mcD$sp$f
});
ScalaJS.c.scala_Tuple2$mcCD$sp.prototype.$$und2__D = (function() {
  return this.$$und2$mcD$sp__D()
});
ScalaJS.c.scala_Tuple2$mcCD$sp.prototype.swap__Lscala_Tuple2 = (function() {
  return this.swap$mcCD$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2$mcCD$sp.prototype.swap$mcCD$sp__Lscala_Tuple2 = (function() {
  return new ScalaJS.c.scala_Tuple2$mcDC$sp().init___D__C(this.$$und2__D(), this.$$und1__C())
});
ScalaJS.c.scala_Tuple2$mcCD$sp.prototype.copy$default$1__C = (function() {
  return this.copy$default$1$mcC$sp__C()
});
ScalaJS.c.scala_Tuple2$mcCD$sp.prototype.copy$default$1$mcC$sp__C = (function() {
  return this.$$und1__C()
});
ScalaJS.c.scala_Tuple2$mcCD$sp.prototype.copy$default$2__D = (function() {
  return this.copy$default$2$mcD$sp__D()
});
ScalaJS.c.scala_Tuple2$mcCD$sp.prototype.copy$default$2$mcD$sp__D = (function() {
  return this.$$und2__D()
});
ScalaJS.c.scala_Tuple2$mcCD$sp.prototype.specInstance$__Z = (function() {
  return true
});
ScalaJS.c.scala_Tuple2$mcCD$sp.prototype.copy$default$2__O = (function() {
  return ScalaJS.bD(this.copy$default$2__D())
});
ScalaJS.c.scala_Tuple2$mcCD$sp.prototype.copy$default$1__O = (function() {
  return ScalaJS.bC(this.copy$default$1__C())
});
ScalaJS.c.scala_Tuple2$mcCD$sp.prototype.$$und2__O = (function() {
  return ScalaJS.bD(this.$$und2__D())
});
ScalaJS.c.scala_Tuple2$mcCD$sp.prototype.$$und1__O = (function() {
  return ScalaJS.bC(this.$$und1__C())
});
ScalaJS.c.scala_Tuple2$mcCD$sp.prototype.init___C__D = (function(_1$mcC$sp, _2$mcD$sp) {
  this.$$und1$mcC$sp$f = _1$mcC$sp;
  this.$$und2$mcD$sp$f = _2$mcD$sp;
  ScalaJS.c.scala_Tuple2.prototype.init___O__O.call(this, null, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_Tuple2$mcCD$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Tuple2$mcCD$sp.prototype = ScalaJS.c.scala_Tuple2$mcCD$sp.prototype;
ScalaJS.is.scala_Tuple2$mcCD$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Tuple2$mcCD$sp)))
});
ScalaJS.as.scala_Tuple2$mcCD$sp = (function(obj) {
  if ((ScalaJS.is.scala_Tuple2$mcCD$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Tuple2$mcCD$sp")
  }
});
ScalaJS.isArrayOf.scala_Tuple2$mcCD$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Tuple2$mcCD$sp)))
});
ScalaJS.asArrayOf.scala_Tuple2$mcCD$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Tuple2$mcCD$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Tuple2$mcCD$sp;", depth)
  }
});
ScalaJS.data.scala_Tuple2$mcCD$sp = new ScalaJS.ClassTypeData({
  scala_Tuple2$mcCD$sp: 0
}, false, "scala.Tuple2$mcCD$sp", ScalaJS.data.scala_Tuple2, {
  scala_Tuple2$mcCD$sp: 1,
  scala_Tuple2: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product2: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Tuple2$mcCD$sp.prototype.$classData = ScalaJS.data.scala_Tuple2$mcCD$sp;
//@ sourceMappingURL=Tuple2$mcCD$sp.js.map
