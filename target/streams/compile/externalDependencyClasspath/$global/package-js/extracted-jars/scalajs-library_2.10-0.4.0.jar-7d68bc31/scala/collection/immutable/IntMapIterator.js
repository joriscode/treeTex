/** @constructor */
ScalaJS.c.scala_collection_immutable_IntMapIterator = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.index$2 = 0;
  this.buffer$2 = null
});
ScalaJS.c.scala_collection_immutable_IntMapIterator.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_immutable_IntMapIterator.prototype.constructor = ScalaJS.c.scala_collection_immutable_IntMapIterator;
ScalaJS.c.scala_collection_immutable_IntMapIterator.prototype.index__I = (function() {
  return this.index$2
});
ScalaJS.c.scala_collection_immutable_IntMapIterator.prototype.index$und$eq__I__V = (function(x$1) {
  this.index$2 = x$1
});
ScalaJS.c.scala_collection_immutable_IntMapIterator.prototype.buffer__AO = (function() {
  return this.buffer$2
});
ScalaJS.c.scala_collection_immutable_IntMapIterator.prototype.buffer$und$eq__AO__V = (function(x$1) {
  this.buffer$2 = x$1
});
ScalaJS.c.scala_collection_immutable_IntMapIterator.prototype.pop__Lscala_collection_immutable_IntMap = (function() {
  this.index$und$eq__I__V((this.index__I() - 1));
  return ScalaJS.as.scala_collection_immutable_IntMap(this.buffer__AO().underlying[this.index__I()])
});
ScalaJS.c.scala_collection_immutable_IntMapIterator.prototype.push__Lscala_collection_immutable_IntMap__V = (function(x) {
  this.buffer__AO().underlying[this.index__I()] = x;
  this.index$und$eq__I__V((this.index__I() + 1))
});
ScalaJS.c.scala_collection_immutable_IntMapIterator.prototype.hasNext__Z = (function() {
  return (this.index__I() !== 0)
});
ScalaJS.c.scala_collection_immutable_IntMapIterator.prototype.next__O = (function() {
  var _$this = this;
  tailCallLoop: while (true) {
    var rc16 = false;
    var x4 = null;
    var x1 = _$this.pop__Lscala_collection_immutable_IntMap();
    if (ScalaJS.is.scala_collection_immutable_IntMap$Bin(x1)) {
      rc16 = true;
      x4 = ScalaJS.as.scala_collection_immutable_IntMap$Bin(x1);
      var t = x4.left__Lscala_collection_immutable_IntMap();
      var right = x4.right__Lscala_collection_immutable_IntMap();
      if (ScalaJS.is.scala_collection_immutable_IntMap$Tip(t)) {
        var x7 = ScalaJS.as.scala_collection_immutable_IntMap$Tip(t);
        _$this.push__Lscala_collection_immutable_IntMap__V(right);
        return _$this.valueOf__Lscala_collection_immutable_IntMap$Tip__O(x7)
      }
    };
    if (rc16) {
      var left = x4.left__Lscala_collection_immutable_IntMap();
      var right$2 = x4.right__Lscala_collection_immutable_IntMap();
      _$this.push__Lscala_collection_immutable_IntMap__V(right$2);
      _$this.push__Lscala_collection_immutable_IntMap__V(left);
      continue tailCallLoop
    };
    if (ScalaJS.is.scala_collection_immutable_IntMap$Tip(x1)) {
      var x13 = ScalaJS.as.scala_collection_immutable_IntMap$Tip(x1);
      return _$this.valueOf__Lscala_collection_immutable_IntMap$Tip__O(x13)
    };
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_IntMap$Nil(), x1)) {
      return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("Empty maps not allowed as subtrees")
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  }
});
ScalaJS.c.scala_collection_immutable_IntMapIterator.prototype.init___Lscala_collection_immutable_IntMap = (function(it) {
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.index$2 = 0;
  this.buffer$2 = ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [33]);
  this.push__Lscala_collection_immutable_IntMap__V(it);
  return this
});
ScalaJS.c.scala_collection_immutable_IntMapIterator.prototype.push__Lscala_collection_immutable_IntMap__ = (function(x) {
  return ScalaJS.bV(this.push__Lscala_collection_immutable_IntMap__V(x))
});
ScalaJS.c.scala_collection_immutable_IntMapIterator.prototype.pop__ = (function() {
  return this.pop__Lscala_collection_immutable_IntMap()
});
ScalaJS.c.scala_collection_immutable_IntMapIterator.prototype.buffer$und$eq__AO__ = (function(x$1) {
  return ScalaJS.bV(this.buffer$und$eq__AO__V(x$1))
});
ScalaJS.c.scala_collection_immutable_IntMapIterator.prototype.buffer__ = (function() {
  return this.buffer__AO()
});
ScalaJS.c.scala_collection_immutable_IntMapIterator.prototype.index$und$eq__I__ = (function(x$1$2) {
  return ScalaJS.bV(this.index$und$eq__I__V(x$1$2))
});
ScalaJS.c.scala_collection_immutable_IntMapIterator.prototype.index__ = (function() {
  return ScalaJS.bI(this.index__I())
});
ScalaJS.c.scala_collection_immutable_IntMapIterator.prototype.valueOf__Lscala_collection_immutable_IntMap$Tip__ = (function(tip) {
  return this.valueOf__Lscala_collection_immutable_IntMap$Tip__O(tip)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_IntMapIterator = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_IntMapIterator.prototype = ScalaJS.c.scala_collection_immutable_IntMapIterator.prototype;
ScalaJS.is.scala_collection_immutable_IntMapIterator = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_IntMapIterator)))
});
ScalaJS.as.scala_collection_immutable_IntMapIterator = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_IntMapIterator(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.IntMapIterator")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_IntMapIterator = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_IntMapIterator)))
});
ScalaJS.asArrayOf.scala_collection_immutable_IntMapIterator = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_IntMapIterator(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.IntMapIterator;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_IntMapIterator = new ScalaJS.ClassTypeData({
  scala_collection_immutable_IntMapIterator: 0
}, false, "scala.collection.immutable.IntMapIterator", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_immutable_IntMapIterator: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_IntMapIterator.prototype.$classData = ScalaJS.data.scala_collection_immutable_IntMapIterator;
//@ sourceMappingURL=IntMapIterator.js.map
