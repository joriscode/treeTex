/** @constructor */
ScalaJS.c.scala_Tuple2$mcDC$sp = (function() {
  ScalaJS.c.scala_Tuple2.call(this);
  this.$$und1$mcD$sp$f = 0.0;
  this.$$und2$mcC$sp$f = 0
});
ScalaJS.c.scala_Tuple2$mcDC$sp.prototype = new ScalaJS.inheritable.scala_Tuple2();
ScalaJS.c.scala_Tuple2$mcDC$sp.prototype.constructor = ScalaJS.c.scala_Tuple2$mcDC$sp;
ScalaJS.c.scala_Tuple2$mcDC$sp.prototype.$$und1$mcD$sp__D = (function() {
  return this.$$und1$mcD$sp$f
});
ScalaJS.c.scala_Tuple2$mcDC$sp.prototype.$$und1__D = (function() {
  return this.$$und1$mcD$sp__D()
});
ScalaJS.c.scala_Tuple2$mcDC$sp.prototype.$$und2$mcC$sp__C = (function() {
  return this.$$und2$mcC$sp$f
});
ScalaJS.c.scala_Tuple2$mcDC$sp.prototype.$$und2__C = (function() {
  return this.$$und2$mcC$sp__C()
});
ScalaJS.c.scala_Tuple2$mcDC$sp.prototype.swap__Lscala_Tuple2 = (function() {
  return this.swap$mcDC$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2$mcDC$sp.prototype.swap$mcDC$sp__Lscala_Tuple2 = (function() {
  return new ScalaJS.c.scala_Tuple2$mcCD$sp().init___C__D(this.$$und2__C(), this.$$und1__D())
});
ScalaJS.c.scala_Tuple2$mcDC$sp.prototype.copy$default$1__D = (function() {
  return this.copy$default$1$mcD$sp__D()
});
ScalaJS.c.scala_Tuple2$mcDC$sp.prototype.copy$default$1$mcD$sp__D = (function() {
  return this.$$und1__D()
});
ScalaJS.c.scala_Tuple2$mcDC$sp.prototype.copy$default$2__C = (function() {
  return this.copy$default$2$mcC$sp__C()
});
ScalaJS.c.scala_Tuple2$mcDC$sp.prototype.copy$default$2$mcC$sp__C = (function() {
  return this.$$und2__C()
});
ScalaJS.c.scala_Tuple2$mcDC$sp.prototype.specInstance$__Z = (function() {
  return true
});
ScalaJS.c.scala_Tuple2$mcDC$sp.prototype.copy$default$2__O = (function() {
  return ScalaJS.bC(this.copy$default$2__C())
});
ScalaJS.c.scala_Tuple2$mcDC$sp.prototype.copy$default$1__O = (function() {
  return ScalaJS.bD(this.copy$default$1__D())
});
ScalaJS.c.scala_Tuple2$mcDC$sp.prototype.$$und2__O = (function() {
  return ScalaJS.bC(this.$$und2__C())
});
ScalaJS.c.scala_Tuple2$mcDC$sp.prototype.$$und1__O = (function() {
  return ScalaJS.bD(this.$$und1__D())
});
ScalaJS.c.scala_Tuple2$mcDC$sp.prototype.init___D__C = (function(_1$mcD$sp, _2$mcC$sp) {
  this.$$und1$mcD$sp$f = _1$mcD$sp;
  this.$$und2$mcC$sp$f = _2$mcC$sp;
  ScalaJS.c.scala_Tuple2.prototype.init___O__O.call(this, null, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_Tuple2$mcDC$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Tuple2$mcDC$sp.prototype = ScalaJS.c.scala_Tuple2$mcDC$sp.prototype;
ScalaJS.is.scala_Tuple2$mcDC$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Tuple2$mcDC$sp)))
});
ScalaJS.as.scala_Tuple2$mcDC$sp = (function(obj) {
  if ((ScalaJS.is.scala_Tuple2$mcDC$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Tuple2$mcDC$sp")
  }
});
ScalaJS.isArrayOf.scala_Tuple2$mcDC$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Tuple2$mcDC$sp)))
});
ScalaJS.asArrayOf.scala_Tuple2$mcDC$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Tuple2$mcDC$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Tuple2$mcDC$sp;", depth)
  }
});
ScalaJS.data.scala_Tuple2$mcDC$sp = new ScalaJS.ClassTypeData({
  scala_Tuple2$mcDC$sp: 0
}, false, "scala.Tuple2$mcDC$sp", ScalaJS.data.scala_Tuple2, {
  scala_Tuple2$mcDC$sp: 1,
  scala_Tuple2: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product2: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Tuple2$mcDC$sp.prototype.$classData = ScalaJS.data.scala_Tuple2$mcDC$sp;
//@ sourceMappingURL=Tuple2$mcDC$sp.js.map
