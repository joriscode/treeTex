/** @constructor */
ScalaJS.c.scala_collection_immutable_RedBlack = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.Empty$module$1 = null;
  this.RedTree$module$1 = null;
  this.BlackTree$module$1 = null
});
ScalaJS.c.scala_collection_immutable_RedBlack.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_RedBlack.prototype.constructor = ScalaJS.c.scala_collection_immutable_RedBlack;
ScalaJS.c.scala_collection_immutable_RedBlack.prototype.Empty$lzycompute__p1__Lscala_collection_immutable_RedBlack$Empty$ = (function() {
  if ((this.Empty$module$1 === null)) {
    this.Empty$module$1 = new ScalaJS.c.scala_collection_immutable_RedBlack$Empty$().init___Lscala_collection_immutable_RedBlack(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.Empty$module$1
});
ScalaJS.c.scala_collection_immutable_RedBlack.prototype.RedTree$lzycompute__p1__Lscala_collection_immutable_RedBlack$RedTree$ = (function() {
  if ((this.RedTree$module$1 === null)) {
    this.RedTree$module$1 = new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree$().init___Lscala_collection_immutable_RedBlack(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.RedTree$module$1
});
ScalaJS.c.scala_collection_immutable_RedBlack.prototype.BlackTree$lzycompute__p1__Lscala_collection_immutable_RedBlack$BlackTree$ = (function() {
  if ((this.BlackTree$module$1 === null)) {
    this.BlackTree$module$1 = new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree$().init___Lscala_collection_immutable_RedBlack(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.BlackTree$module$1
});
ScalaJS.c.scala_collection_immutable_RedBlack.prototype.scala$collection$immutable$RedBlack$$blacken__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree = (function(t) {
  var x1 = t;
  if (ScalaJS.is.scala_collection_immutable_RedBlack$RedTree(x1)) {
    var x2 = ScalaJS.as.scala_collection_immutable_RedBlack$RedTree(x1);
    var k = x2.key__O();
    var v = x2.value__O();
    var l = x2.left__Lscala_collection_immutable_RedBlack$Tree();
    var r = x2.right__Lscala_collection_immutable_RedBlack$Tree();
    return new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this, k, v, l, r)
  };
  return x1
});
ScalaJS.c.scala_collection_immutable_RedBlack.prototype.scala$collection$immutable$RedBlack$$mkTree__Z__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$NonEmpty = (function(isBlack, k, v, l, r) {
  if (isBlack) {
    return new ScalaJS.c.scala_collection_immutable_RedBlack$BlackTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this, k, v, l, r)
  } else {
    return new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this, k, v, l, r)
  }
});
ScalaJS.c.scala_collection_immutable_RedBlack.prototype.Empty__Lscala_collection_immutable_RedBlack$Empty$ = (function() {
  if ((this.Empty$module$1 === null)) {
    return this.Empty$lzycompute__p1__Lscala_collection_immutable_RedBlack$Empty$()
  } else {
    return this.Empty$module$1
  }
});
ScalaJS.c.scala_collection_immutable_RedBlack.prototype.RedTree__Lscala_collection_immutable_RedBlack$RedTree$ = (function() {
  if ((this.RedTree$module$1 === null)) {
    return this.RedTree$lzycompute__p1__Lscala_collection_immutable_RedBlack$RedTree$()
  } else {
    return this.RedTree$module$1
  }
});
ScalaJS.c.scala_collection_immutable_RedBlack.prototype.BlackTree__Lscala_collection_immutable_RedBlack$BlackTree$ = (function() {
  if ((this.BlackTree$module$1 === null)) {
    return this.BlackTree$lzycompute__p1__Lscala_collection_immutable_RedBlack$BlackTree$()
  } else {
    return this.BlackTree$module$1
  }
});
ScalaJS.c.scala_collection_immutable_RedBlack.prototype.BlackTree__ = (function() {
  return this.BlackTree__Lscala_collection_immutable_RedBlack$BlackTree$()
});
ScalaJS.c.scala_collection_immutable_RedBlack.prototype.RedTree__ = (function() {
  return this.RedTree__Lscala_collection_immutable_RedBlack$RedTree$()
});
ScalaJS.c.scala_collection_immutable_RedBlack.prototype.Empty__ = (function() {
  return this.Empty__Lscala_collection_immutable_RedBlack$Empty$()
});
ScalaJS.c.scala_collection_immutable_RedBlack.prototype.scala$collection$immutable$RedBlack$$mkTree__Z__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__ = (function(isBlack, k, v, l, r) {
  return this.scala$collection$immutable$RedBlack$$mkTree__Z__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$NonEmpty(isBlack, k, v, l, r)
});
ScalaJS.c.scala_collection_immutable_RedBlack.prototype.scala$collection$immutable$RedBlack$$blacken__Lscala_collection_immutable_RedBlack$Tree__ = (function(t) {
  return this.scala$collection$immutable$RedBlack$$blacken__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(t)
});
ScalaJS.c.scala_collection_immutable_RedBlack.prototype.isSmaller__O__O__ = (function(x, y) {
  return ScalaJS.bZ(this.isSmaller__O__O__Z(x, y))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_RedBlack = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_RedBlack.prototype = ScalaJS.c.scala_collection_immutable_RedBlack.prototype;
ScalaJS.is.scala_collection_immutable_RedBlack = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_RedBlack)))
});
ScalaJS.as.scala_collection_immutable_RedBlack = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_RedBlack(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.RedBlack")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_RedBlack = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_RedBlack)))
});
ScalaJS.asArrayOf.scala_collection_immutable_RedBlack = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_RedBlack(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.RedBlack;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_RedBlack = new ScalaJS.ClassTypeData({
  scala_collection_immutable_RedBlack: 0
}, false, "scala.collection.immutable.RedBlack", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_RedBlack: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_RedBlack.prototype.$classData = ScalaJS.data.scala_collection_immutable_RedBlack;
//@ sourceMappingURL=RedBlack.js.map
