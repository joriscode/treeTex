/** @constructor */
ScalaJS.c.scala_util_MurmurHash = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.seed$1 = 0;
  this.scala$util$MurmurHash$$h$1 = 0;
  this.scala$util$MurmurHash$$c$1 = 0;
  this.scala$util$MurmurHash$$k$1 = 0;
  this.scala$util$MurmurHash$$hashed$1 = false;
  this.hashvalue$1 = 0
});
ScalaJS.c.scala_util_MurmurHash.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_MurmurHash.prototype.constructor = ScalaJS.c.scala_util_MurmurHash;
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcZD$sp__D__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZD$sp__Lscala_Function1__D__Z(this, v1)
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcDD$sp__D__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDD$sp__Lscala_Function1__D__D(this, v1)
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcFD$sp__D__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFD$sp__Lscala_Function1__D__F(this, v1)
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcID$sp__D__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcID$sp__Lscala_Function1__D__I(this, v1)
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcJD$sp__D__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJD$sp__Lscala_Function1__D__J(this, v1)
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcVD$sp__D__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVD$sp__Lscala_Function1__D__V(this, v1)
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcZF$sp__F__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZF$sp__Lscala_Function1__F__Z(this, v1)
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcDF$sp__F__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDF$sp__Lscala_Function1__F__D(this, v1)
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcFF$sp__F__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFF$sp__Lscala_Function1__F__F(this, v1)
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcIF$sp__F__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcIF$sp__Lscala_Function1__F__I(this, v1)
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcJF$sp__F__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJF$sp__Lscala_Function1__F__J(this, v1)
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcVF$sp__F__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVF$sp__Lscala_Function1__F__V(this, v1)
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcZI$sp__I__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZI$sp__Lscala_Function1__I__Z(this, v1)
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcDI$sp__I__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDI$sp__Lscala_Function1__I__D(this, v1)
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcFI$sp__I__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFI$sp__Lscala_Function1__I__F(this, v1)
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcII$sp__I__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcII$sp__Lscala_Function1__I__I(this, v1)
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcJI$sp__I__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJI$sp__Lscala_Function1__I__J(this, v1)
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcVI$sp__I__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVI$sp__Lscala_Function1__I__V(this, v1)
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcZJ$sp__J__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZJ$sp__Lscala_Function1__J__Z(this, v1)
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcDJ$sp__J__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDJ$sp__Lscala_Function1__J__D(this, v1)
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcFJ$sp__J__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFJ$sp__Lscala_Function1__J__F(this, v1)
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcIJ$sp__J__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcIJ$sp__Lscala_Function1__J__I(this, v1)
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcJJ$sp__J__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJJ$sp__Lscala_Function1__J__J(this, v1)
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcVJ$sp__J__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVJ$sp__Lscala_Function1__J__V(this, v1)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcZD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcDD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcFD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcID$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcID$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcJD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcVD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcZF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcDF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcFF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcIF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcIF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcJF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcVF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcZI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcDI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcFI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcII$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcII$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcJI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcVI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcZJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcDJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcFJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcIJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcIJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcJJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcVJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcZD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcDD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcFD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcID$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcID$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcJD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcVD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcZF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcDF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcFF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcIF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcIF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcJF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcVF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcZI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcDI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcFI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcII$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcII$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcJI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcVI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcZJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcDJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcFJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcIJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcIJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcJJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcVJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.toString__T = (function() {
  return ScalaJS.impls.scala_Function1$class__toString__Lscala_Function1__T(this)
});
ScalaJS.c.scala_util_MurmurHash.prototype.scala$util$MurmurHash$$h__I = (function() {
  return this.scala$util$MurmurHash$$h$1
});
ScalaJS.c.scala_util_MurmurHash.prototype.scala$util$MurmurHash$$h$und$eq__I__V = (function(x$1) {
  this.scala$util$MurmurHash$$h$1 = x$1
});
ScalaJS.c.scala_util_MurmurHash.prototype.scala$util$MurmurHash$$c__I = (function() {
  return this.scala$util$MurmurHash$$c$1
});
ScalaJS.c.scala_util_MurmurHash.prototype.scala$util$MurmurHash$$c$und$eq__I__V = (function(x$1) {
  this.scala$util$MurmurHash$$c$1 = x$1
});
ScalaJS.c.scala_util_MurmurHash.prototype.scala$util$MurmurHash$$k__I = (function() {
  return this.scala$util$MurmurHash$$k$1
});
ScalaJS.c.scala_util_MurmurHash.prototype.scala$util$MurmurHash$$k$und$eq__I__V = (function(x$1) {
  this.scala$util$MurmurHash$$k$1 = x$1
});
ScalaJS.c.scala_util_MurmurHash.prototype.scala$util$MurmurHash$$hashed__p1__Z = (function() {
  return this.scala$util$MurmurHash$$hashed$1
});
ScalaJS.c.scala_util_MurmurHash.prototype.scala$util$MurmurHash$$hashed$und$eq__Z__V = (function(x$1) {
  this.scala$util$MurmurHash$$hashed$1 = x$1
});
ScalaJS.c.scala_util_MurmurHash.prototype.hashvalue__p1__I = (function() {
  return this.hashvalue$1
});
ScalaJS.c.scala_util_MurmurHash.prototype.hashvalue$und$eq__p1__I__V = (function(x$1) {
  this.hashvalue$1 = x$1
});
ScalaJS.c.scala_util_MurmurHash.prototype.reset__V = (function() {
  this.scala$util$MurmurHash$$h$und$eq__I__V(ScalaJS.modules.scala_util_MurmurHash().startHash__I__I(this.seed$1));
  this.scala$util$MurmurHash$$c$und$eq__I__V(-1789642873);
  this.scala$util$MurmurHash$$k$und$eq__I__V(718793509);
  this.scala$util$MurmurHash$$hashed$und$eq__Z__V(false)
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply__O__V = (function(t) {
  this.scala$util$MurmurHash$$h$und$eq__I__V(ScalaJS.modules.scala_util_MurmurHash().extendHash__I__I__I__I__I(this.scala$util$MurmurHash$$h__I(), ScalaJS.modules.scala_runtime_ScalaRunTime().hash__O__I(t), this.scala$util$MurmurHash$$c__I(), this.scala$util$MurmurHash$$k__I()));
  this.scala$util$MurmurHash$$c$und$eq__I__V(ScalaJS.modules.scala_util_MurmurHash().nextMagicA__I__I(this.scala$util$MurmurHash$$c__I()));
  this.scala$util$MurmurHash$$k$und$eq__I__V(ScalaJS.modules.scala_util_MurmurHash().nextMagicB__I__I(this.scala$util$MurmurHash$$k__I()));
  this.scala$util$MurmurHash$$hashed$und$eq__Z__V(false)
});
ScalaJS.c.scala_util_MurmurHash.prototype.append__I__V = (function(i) {
  this.scala$util$MurmurHash$$h$und$eq__I__V(ScalaJS.modules.scala_util_MurmurHash().extendHash__I__I__I__I__I(this.scala$util$MurmurHash$$h__I(), i, this.scala$util$MurmurHash$$c__I(), this.scala$util$MurmurHash$$k__I()));
  this.scala$util$MurmurHash$$c$und$eq__I__V(ScalaJS.modules.scala_util_MurmurHash().nextMagicA__I__I(this.scala$util$MurmurHash$$c__I()));
  this.scala$util$MurmurHash$$k$und$eq__I__V(ScalaJS.modules.scala_util_MurmurHash().nextMagicB__I__I(this.scala$util$MurmurHash$$k__I()));
  this.scala$util$MurmurHash$$hashed$und$eq__Z__V(false)
});
ScalaJS.c.scala_util_MurmurHash.prototype.hash__I = (function() {
  if ((!this.scala$util$MurmurHash$$hashed__p1__Z())) {
    this.hashvalue$und$eq__p1__I__V(ScalaJS.modules.scala_util_MurmurHash().finalizeHash__I__I(this.scala$util$MurmurHash$$h__I()));
    this.scala$util$MurmurHash$$hashed$und$eq__Z__V(true)
  };
  return this.hashvalue__p1__I()
});
ScalaJS.c.scala_util_MurmurHash.prototype.hashCode__I = (function() {
  return this.hash__I()
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcD$sp__D__V = (function(t) {
  this.apply__O__V(ScalaJS.bD(t))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcF$sp__F__V = (function(t) {
  this.apply__O__V(ScalaJS.bF(t))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcI$sp__I__V = (function(t) {
  this.apply__O__V(ScalaJS.bI(t))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcJ$sp__J__V = (function(t) {
  this.apply__O__V(ScalaJS.bJ(t))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply__O__O = (function(v1) {
  this.apply__O__V(v1);
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.scala_util_MurmurHash.prototype.init___I = (function(seed) {
  this.seed$1 = seed;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Function1$class__$init$__Lscala_Function1__V(this);
  this.scala$util$MurmurHash$$h$1 = ScalaJS.modules.scala_util_MurmurHash().startHash__I__I(seed);
  this.scala$util$MurmurHash$$c$1 = -1789642873;
  this.scala$util$MurmurHash$$k$1 = 718793509;
  this.scala$util$MurmurHash$$hashed$1 = false;
  this.hashvalue$1 = this.scala$util$MurmurHash$$h__I();
  return this
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcVJ$sp__Lscala_Function1__ = (function(g) {
  return this.andThen$mcVJ$sp__Lscala_Function1__Lscala_Function1(g)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcJJ$sp__Lscala_Function1__ = (function(g$2) {
  return this.andThen$mcJJ$sp__Lscala_Function1__Lscala_Function1(g$2)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcIJ$sp__Lscala_Function1__ = (function(g$3) {
  return this.andThen$mcIJ$sp__Lscala_Function1__Lscala_Function1(g$3)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcFJ$sp__Lscala_Function1__ = (function(g$4) {
  return this.andThen$mcFJ$sp__Lscala_Function1__Lscala_Function1(g$4)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcDJ$sp__Lscala_Function1__ = (function(g$5) {
  return this.andThen$mcDJ$sp__Lscala_Function1__Lscala_Function1(g$5)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcZJ$sp__Lscala_Function1__ = (function(g$6) {
  return this.andThen$mcZJ$sp__Lscala_Function1__Lscala_Function1(g$6)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcVI$sp__Lscala_Function1__ = (function(g$7) {
  return this.andThen$mcVI$sp__Lscala_Function1__Lscala_Function1(g$7)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcJI$sp__Lscala_Function1__ = (function(g$8) {
  return this.andThen$mcJI$sp__Lscala_Function1__Lscala_Function1(g$8)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcII$sp__Lscala_Function1__ = (function(g$9) {
  return this.andThen$mcII$sp__Lscala_Function1__Lscala_Function1(g$9)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcFI$sp__Lscala_Function1__ = (function(g$10) {
  return this.andThen$mcFI$sp__Lscala_Function1__Lscala_Function1(g$10)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcDI$sp__Lscala_Function1__ = (function(g$11) {
  return this.andThen$mcDI$sp__Lscala_Function1__Lscala_Function1(g$11)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcZI$sp__Lscala_Function1__ = (function(g$12) {
  return this.andThen$mcZI$sp__Lscala_Function1__Lscala_Function1(g$12)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcVF$sp__Lscala_Function1__ = (function(g$13) {
  return this.andThen$mcVF$sp__Lscala_Function1__Lscala_Function1(g$13)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcJF$sp__Lscala_Function1__ = (function(g$14) {
  return this.andThen$mcJF$sp__Lscala_Function1__Lscala_Function1(g$14)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcIF$sp__Lscala_Function1__ = (function(g$15) {
  return this.andThen$mcIF$sp__Lscala_Function1__Lscala_Function1(g$15)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcFF$sp__Lscala_Function1__ = (function(g$16) {
  return this.andThen$mcFF$sp__Lscala_Function1__Lscala_Function1(g$16)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcDF$sp__Lscala_Function1__ = (function(g$17) {
  return this.andThen$mcDF$sp__Lscala_Function1__Lscala_Function1(g$17)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcZF$sp__Lscala_Function1__ = (function(g$18) {
  return this.andThen$mcZF$sp__Lscala_Function1__Lscala_Function1(g$18)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcVD$sp__Lscala_Function1__ = (function(g$19) {
  return this.andThen$mcVD$sp__Lscala_Function1__Lscala_Function1(g$19)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcJD$sp__Lscala_Function1__ = (function(g$20) {
  return this.andThen$mcJD$sp__Lscala_Function1__Lscala_Function1(g$20)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcID$sp__Lscala_Function1__ = (function(g$21) {
  return this.andThen$mcID$sp__Lscala_Function1__Lscala_Function1(g$21)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcFD$sp__Lscala_Function1__ = (function(g$22) {
  return this.andThen$mcFD$sp__Lscala_Function1__Lscala_Function1(g$22)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcDD$sp__Lscala_Function1__ = (function(g$23) {
  return this.andThen$mcDD$sp__Lscala_Function1__Lscala_Function1(g$23)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen$mcZD$sp__Lscala_Function1__ = (function(g$24) {
  return this.andThen$mcZD$sp__Lscala_Function1__Lscala_Function1(g$24)
});
ScalaJS.c.scala_util_MurmurHash.prototype.andThen__Lscala_Function1__ = (function(g$25) {
  return this.andThen__Lscala_Function1__Lscala_Function1(g$25)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcVJ$sp__Lscala_Function1__ = (function(g$26) {
  return this.compose$mcVJ$sp__Lscala_Function1__Lscala_Function1(g$26)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcJJ$sp__Lscala_Function1__ = (function(g$27) {
  return this.compose$mcJJ$sp__Lscala_Function1__Lscala_Function1(g$27)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcIJ$sp__Lscala_Function1__ = (function(g$28) {
  return this.compose$mcIJ$sp__Lscala_Function1__Lscala_Function1(g$28)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcFJ$sp__Lscala_Function1__ = (function(g$29) {
  return this.compose$mcFJ$sp__Lscala_Function1__Lscala_Function1(g$29)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcDJ$sp__Lscala_Function1__ = (function(g$30) {
  return this.compose$mcDJ$sp__Lscala_Function1__Lscala_Function1(g$30)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcZJ$sp__Lscala_Function1__ = (function(g$31) {
  return this.compose$mcZJ$sp__Lscala_Function1__Lscala_Function1(g$31)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcVI$sp__Lscala_Function1__ = (function(g$32) {
  return this.compose$mcVI$sp__Lscala_Function1__Lscala_Function1(g$32)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcJI$sp__Lscala_Function1__ = (function(g$33) {
  return this.compose$mcJI$sp__Lscala_Function1__Lscala_Function1(g$33)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcII$sp__Lscala_Function1__ = (function(g$34) {
  return this.compose$mcII$sp__Lscala_Function1__Lscala_Function1(g$34)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcFI$sp__Lscala_Function1__ = (function(g$35) {
  return this.compose$mcFI$sp__Lscala_Function1__Lscala_Function1(g$35)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcDI$sp__Lscala_Function1__ = (function(g$36) {
  return this.compose$mcDI$sp__Lscala_Function1__Lscala_Function1(g$36)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcZI$sp__Lscala_Function1__ = (function(g$37) {
  return this.compose$mcZI$sp__Lscala_Function1__Lscala_Function1(g$37)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcVF$sp__Lscala_Function1__ = (function(g$38) {
  return this.compose$mcVF$sp__Lscala_Function1__Lscala_Function1(g$38)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcJF$sp__Lscala_Function1__ = (function(g$39) {
  return this.compose$mcJF$sp__Lscala_Function1__Lscala_Function1(g$39)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcIF$sp__Lscala_Function1__ = (function(g$40) {
  return this.compose$mcIF$sp__Lscala_Function1__Lscala_Function1(g$40)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcFF$sp__Lscala_Function1__ = (function(g$41) {
  return this.compose$mcFF$sp__Lscala_Function1__Lscala_Function1(g$41)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcDF$sp__Lscala_Function1__ = (function(g$42) {
  return this.compose$mcDF$sp__Lscala_Function1__Lscala_Function1(g$42)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcZF$sp__Lscala_Function1__ = (function(g$43) {
  return this.compose$mcZF$sp__Lscala_Function1__Lscala_Function1(g$43)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcVD$sp__Lscala_Function1__ = (function(g$44) {
  return this.compose$mcVD$sp__Lscala_Function1__Lscala_Function1(g$44)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcJD$sp__Lscala_Function1__ = (function(g$45) {
  return this.compose$mcJD$sp__Lscala_Function1__Lscala_Function1(g$45)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcID$sp__Lscala_Function1__ = (function(g$46) {
  return this.compose$mcID$sp__Lscala_Function1__Lscala_Function1(g$46)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcFD$sp__Lscala_Function1__ = (function(g$47) {
  return this.compose$mcFD$sp__Lscala_Function1__Lscala_Function1(g$47)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcDD$sp__Lscala_Function1__ = (function(g$48) {
  return this.compose$mcDD$sp__Lscala_Function1__Lscala_Function1(g$48)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose$mcZD$sp__Lscala_Function1__ = (function(g$49) {
  return this.compose$mcZD$sp__Lscala_Function1__Lscala_Function1(g$49)
});
ScalaJS.c.scala_util_MurmurHash.prototype.compose__Lscala_Function1__ = (function(g$50) {
  return this.compose__Lscala_Function1__Lscala_Function1(g$50)
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcVJ$sp__J__ = (function(v1) {
  return ScalaJS.bV(this.apply$mcVJ$sp__J__V(v1))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcJJ$sp__J__ = (function(v1$2) {
  return ScalaJS.bJ(this.apply$mcJJ$sp__J__J(v1$2))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcIJ$sp__J__ = (function(v1$3) {
  return ScalaJS.bI(this.apply$mcIJ$sp__J__I(v1$3))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcFJ$sp__J__ = (function(v1$4) {
  return ScalaJS.bF(this.apply$mcFJ$sp__J__F(v1$4))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcDJ$sp__J__ = (function(v1$5) {
  return ScalaJS.bD(this.apply$mcDJ$sp__J__D(v1$5))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcZJ$sp__J__ = (function(v1$6) {
  return ScalaJS.bZ(this.apply$mcZJ$sp__J__Z(v1$6))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcVI$sp__I__ = (function(v1$7) {
  return ScalaJS.bV(this.apply$mcVI$sp__I__V(v1$7))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcJI$sp__I__ = (function(v1$8) {
  return ScalaJS.bJ(this.apply$mcJI$sp__I__J(v1$8))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcII$sp__I__ = (function(v1$9) {
  return ScalaJS.bI(this.apply$mcII$sp__I__I(v1$9))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcFI$sp__I__ = (function(v1$10) {
  return ScalaJS.bF(this.apply$mcFI$sp__I__F(v1$10))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcDI$sp__I__ = (function(v1$11) {
  return ScalaJS.bD(this.apply$mcDI$sp__I__D(v1$11))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcZI$sp__I__ = (function(v1$12) {
  return ScalaJS.bZ(this.apply$mcZI$sp__I__Z(v1$12))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcVF$sp__F__ = (function(v1$13) {
  return ScalaJS.bV(this.apply$mcVF$sp__F__V(v1$13))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcJF$sp__F__ = (function(v1$14) {
  return ScalaJS.bJ(this.apply$mcJF$sp__F__J(v1$14))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcIF$sp__F__ = (function(v1$15) {
  return ScalaJS.bI(this.apply$mcIF$sp__F__I(v1$15))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcFF$sp__F__ = (function(v1$16) {
  return ScalaJS.bF(this.apply$mcFF$sp__F__F(v1$16))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcDF$sp__F__ = (function(v1$17) {
  return ScalaJS.bD(this.apply$mcDF$sp__F__D(v1$17))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcZF$sp__F__ = (function(v1$18) {
  return ScalaJS.bZ(this.apply$mcZF$sp__F__Z(v1$18))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcVD$sp__D__ = (function(v1$19) {
  return ScalaJS.bV(this.apply$mcVD$sp__D__V(v1$19))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcJD$sp__D__ = (function(v1$20) {
  return ScalaJS.bJ(this.apply$mcJD$sp__D__J(v1$20))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcID$sp__D__ = (function(v1$21) {
  return ScalaJS.bI(this.apply$mcID$sp__D__I(v1$21))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcFD$sp__D__ = (function(v1$22) {
  return ScalaJS.bF(this.apply$mcFD$sp__D__F(v1$22))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcDD$sp__D__ = (function(v1$23) {
  return ScalaJS.bD(this.apply$mcDD$sp__D__D(v1$23))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcZD$sp__D__ = (function(v1$24) {
  return ScalaJS.bZ(this.apply$mcZD$sp__D__Z(v1$24))
});
ScalaJS.c.scala_util_MurmurHash.prototype.hash__ = (function() {
  return ScalaJS.bI(this.hash__I())
});
ScalaJS.c.scala_util_MurmurHash.prototype.append__I__ = (function(i) {
  return ScalaJS.bV(this.append__I__V(i))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcJ$sp__J__ = (function(t) {
  return ScalaJS.bV(this.apply$mcJ$sp__J__V(t))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcI$sp__I__ = (function(t$2) {
  return ScalaJS.bV(this.apply$mcI$sp__I__V(t$2))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcF$sp__F__ = (function(t$3) {
  return ScalaJS.bV(this.apply$mcF$sp__F__V(t$3))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply$mcD$sp__D__ = (function(t$4) {
  return ScalaJS.bV(this.apply$mcD$sp__D__V(t$4))
});
ScalaJS.c.scala_util_MurmurHash.prototype.apply__O__ = (function(t$5) {
  return ScalaJS.bV(this.apply__O__V(t$5))
});
ScalaJS.c.scala_util_MurmurHash.prototype.reset__ = (function() {
  return ScalaJS.bV(this.reset__V())
});
ScalaJS.c.scala_util_MurmurHash.prototype.scala$util$MurmurHash$$hashed$und$eq__Z__ = (function(x$1) {
  return ScalaJS.bV(this.scala$util$MurmurHash$$hashed$und$eq__Z__V(x$1))
});
ScalaJS.c.scala_util_MurmurHash.prototype.scala$util$MurmurHash$$k$und$eq__I__ = (function(x$1$2) {
  return ScalaJS.bV(this.scala$util$MurmurHash$$k$und$eq__I__V(x$1$2))
});
ScalaJS.c.scala_util_MurmurHash.prototype.scala$util$MurmurHash$$k__ = (function() {
  return ScalaJS.bI(this.scala$util$MurmurHash$$k__I())
});
ScalaJS.c.scala_util_MurmurHash.prototype.scala$util$MurmurHash$$c$und$eq__I__ = (function(x$1$3) {
  return ScalaJS.bV(this.scala$util$MurmurHash$$c$und$eq__I__V(x$1$3))
});
ScalaJS.c.scala_util_MurmurHash.prototype.scala$util$MurmurHash$$c__ = (function() {
  return ScalaJS.bI(this.scala$util$MurmurHash$$c__I())
});
ScalaJS.c.scala_util_MurmurHash.prototype.scala$util$MurmurHash$$h$und$eq__I__ = (function(x$1$4) {
  return ScalaJS.bV(this.scala$util$MurmurHash$$h$und$eq__I__V(x$1$4))
});
ScalaJS.c.scala_util_MurmurHash.prototype.scala$util$MurmurHash$$h__ = (function() {
  return ScalaJS.bI(this.scala$util$MurmurHash$$h__I())
});
/** @constructor */
ScalaJS.inheritable.scala_util_MurmurHash = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_MurmurHash.prototype = ScalaJS.c.scala_util_MurmurHash.prototype;
ScalaJS.is.scala_util_MurmurHash = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_MurmurHash)))
});
ScalaJS.as.scala_util_MurmurHash = (function(obj) {
  if ((ScalaJS.is.scala_util_MurmurHash(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.MurmurHash")
  }
});
ScalaJS.isArrayOf.scala_util_MurmurHash = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_MurmurHash)))
});
ScalaJS.asArrayOf.scala_util_MurmurHash = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_MurmurHash(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.MurmurHash;", depth)
  }
});
ScalaJS.data.scala_util_MurmurHash = new ScalaJS.ClassTypeData({
  scala_util_MurmurHash: 0
}, false, "scala.util.MurmurHash", ScalaJS.data.java_lang_Object, {
  scala_util_MurmurHash: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_MurmurHash.prototype.$classData = ScalaJS.data.scala_util_MurmurHash;
//@ sourceMappingURL=MurmurHash.js.map