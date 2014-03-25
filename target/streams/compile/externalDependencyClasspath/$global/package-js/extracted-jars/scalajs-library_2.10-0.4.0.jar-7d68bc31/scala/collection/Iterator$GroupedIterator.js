/** @constructor */
ScalaJS.c.scala_collection_Iterator$GroupedIterator = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.self$2 = null;
  this.scala$collection$Iterator$GroupedIterator$$size$f = 0;
  this.scala$collection$Iterator$GroupedIterator$$step$f = 0;
  this.buffer$2 = null;
  this.filled$2 = false;
  this.$$undpartial$2 = false;
  this.scala$collection$Iterator$GroupedIterator$$pad$f = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_Iterator$GroupedIterator.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_Iterator$GroupedIterator.prototype.constructor = ScalaJS.c.scala_collection_Iterator$GroupedIterator;
ScalaJS.c.scala_collection_Iterator$GroupedIterator.prototype.withPadding__Lscala_Function0__Lscala_collection_Iterator$GroupedIterator = (function(x) {
  this.scala$collection$Iterator$GroupedIterator$$pad$f = new ScalaJS.c.scala_Some().init___O(x);
  return this
});
ScalaJS.c.scala_collection_Iterator$GroupedIterator.prototype.withPartial__Z__Lscala_collection_Iterator$GroupedIterator = (function(x) {
  this.$$undpartial$2 = x;
  if ((this.$$undpartial$2 === true)) {
    this.scala$collection$Iterator$GroupedIterator$$pad$f = ScalaJS.modules.scala_None()
  };
  return this
});
ScalaJS.c.scala_collection_Iterator$GroupedIterator.prototype.takeDestructively__p2__I__Lscala_collection_Seq = (function(size) {
  var buf = new ScalaJS.c.scala_collection_mutable_ArrayBuffer().init___();
  var i = 0;
  while ((this.self$2.hasNext__Z() && (i < size))) {
    buf.$$plus$eq__O__Lscala_collection_mutable_ArrayBuffer(this.self$2.next__O());
    i = (i + 1)
  };
  return buf
});
ScalaJS.c.scala_collection_Iterator$GroupedIterator.prototype.padding__p2__I__Lscala_collection_immutable_List = (function(x) {
  return ScalaJS.as.scala_collection_immutable_List(ScalaJS.modules.scala_collection_immutable_List().fill__I__Lscala_Function0__Lscala_collection_GenTraversable(x, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
    return (function() {
      return ScalaJS.as.scala_Function0(arg$outer.scala$collection$Iterator$GroupedIterator$$pad$f.get__O()).apply__O()
    })
  })(this))))
});
ScalaJS.c.scala_collection_Iterator$GroupedIterator.prototype.gap__p2__I = (function() {
  return ScalaJS.modules.scala_runtime_RichInt().max$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I((this.scala$collection$Iterator$GroupedIterator$$step$f - this.scala$collection$Iterator$GroupedIterator$$size$f)), 0)
});
ScalaJS.c.scala_collection_Iterator$GroupedIterator.prototype.go__p2__I__Z = (function(count) {
  var len$lzy = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  var incomplete$lzy = new ScalaJS.c.scala_runtime_BooleanRef().init___Z(false);
  var bitmap$0 = new ScalaJS.c.scala_runtime_VolatileByteRef().init___B(0);
  var prevSize = this.buffer$2.size__I();
  var res = this.takeDestructively__p2__I__Lscala_collection_Seq(count);
  if ((this.scala$collection$Iterator$GroupedIterator$$pad$f.isDefined__Z() && (!this.self$2.hasNext__Z()))) {
    var shortBy = (count - res.length__I());
    if ((shortBy > 0)) {
      var xs = ScalaJS.as.scala_collection_Seq(res.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O(this.padding__p2__I__Lscala_collection_immutable_List(shortBy), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
    } else {
      var xs = res
    }
  } else {
    var xs = res
  };
  if (xs.isEmpty__Z()) {
    return false
  } else {
    if (this.$$undpartial$2) {
      return this.deliver$1__p2__I__I__Lscala_collection_Seq__Lscala_runtime_IntRef__Lscala_runtime_VolatileByteRef__Z(ScalaJS.modules.scala_runtime_RichInt().min$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(this.len$2__p2__Lscala_collection_Seq__Lscala_runtime_IntRef__Lscala_runtime_VolatileByteRef__I(xs, len$lzy, bitmap$0)), this.scala$collection$Iterator$GroupedIterator$$size$f), prevSize, xs, len$lzy, bitmap$0)
    } else {
      if (this.incomplete$1__p2__I__Lscala_collection_Seq__Lscala_runtime_IntRef__Lscala_runtime_BooleanRef__Lscala_runtime_VolatileByteRef__Z(count, xs, len$lzy, incomplete$lzy, bitmap$0)) {
        return false
      } else {
        if (this.isFirst$1__p2__I__Z(prevSize)) {
          return this.deliver$1__p2__I__I__Lscala_collection_Seq__Lscala_runtime_IntRef__Lscala_runtime_VolatileByteRef__Z(this.len$2__p2__Lscala_collection_Seq__Lscala_runtime_IntRef__Lscala_runtime_VolatileByteRef__I(xs, len$lzy, bitmap$0), prevSize, xs, len$lzy, bitmap$0)
        } else {
          return this.deliver$1__p2__I__I__Lscala_collection_Seq__Lscala_runtime_IntRef__Lscala_runtime_VolatileByteRef__Z(ScalaJS.modules.scala_runtime_RichInt().min$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(this.scala$collection$Iterator$GroupedIterator$$step$f), this.scala$collection$Iterator$GroupedIterator$$size$f), prevSize, xs, len$lzy, bitmap$0)
        }
      }
    }
  }
});
ScalaJS.c.scala_collection_Iterator$GroupedIterator.prototype.fill__p2__Z = (function() {
  if ((!this.self$2.hasNext__Z())) {
    return false
  } else {
    if (this.buffer$2.isEmpty__Z()) {
      return this.go__p2__I__Z(this.scala$collection$Iterator$GroupedIterator$$size$f)
    } else {
      return this.go__p2__I__Z(this.scala$collection$Iterator$GroupedIterator$$step$f)
    }
  }
});
ScalaJS.c.scala_collection_Iterator$GroupedIterator.prototype.hasNext__Z = (function() {
  return (this.filled$2 || this.fill__p2__Z())
});
ScalaJS.c.scala_collection_Iterator$GroupedIterator.prototype.next__Lscala_collection_immutable_List = (function() {
  if ((!this.filled$2)) {
    ScalaJS.bZ(this.fill__p2__Z())
  } else {
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  if ((!this.filled$2)) {
    throw new ScalaJS.c.java_util_NoSuchElementException().init___T("next on empty iterator")
  };
  this.filled$2 = false;
  return this.buffer$2.toList__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_Iterator$GroupedIterator.prototype.scala$collection$Iterator$GroupedIterator$$$outer__Lscala_collection_Iterator = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_Iterator$GroupedIterator.prototype.next__O = (function() {
  return this.next__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_Iterator$GroupedIterator.prototype.isFirst$1__p2__I__Z = (function(prevSize$1) {
  return (prevSize$1 === 0)
});
ScalaJS.c.scala_collection_Iterator$GroupedIterator.prototype.len$lzycompute$1__p2__Lscala_collection_Seq__Lscala_runtime_IntRef__Lscala_runtime_VolatileByteRef__I = (function(xs$1, len$lzy$1, bitmap$0$1) {
  if (((bitmap$0$1.elem$1 & 1) === 0)) {
    len$lzy$1.elem$1 = xs$1.length__I();
    bitmap$0$1.elem$1 = (bitmap$0$1.elem$1 | 1)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return len$lzy$1.elem$1
});
ScalaJS.c.scala_collection_Iterator$GroupedIterator.prototype.len$2__p2__Lscala_collection_Seq__Lscala_runtime_IntRef__Lscala_runtime_VolatileByteRef__I = (function(xs$1, len$lzy$1, bitmap$0$1) {
  if (((bitmap$0$1.elem$1 & 1) === 0)) {
    return this.len$lzycompute$1__p2__Lscala_collection_Seq__Lscala_runtime_IntRef__Lscala_runtime_VolatileByteRef__I(xs$1, len$lzy$1, bitmap$0$1)
  } else {
    return len$lzy$1.elem$1
  }
});
ScalaJS.c.scala_collection_Iterator$GroupedIterator.prototype.incomplete$lzycompute$1__p2__I__Lscala_collection_Seq__Lscala_runtime_IntRef__Lscala_runtime_BooleanRef__Lscala_runtime_VolatileByteRef__Z = (function(count$1, xs$1, len$lzy$1, incomplete$lzy$1, bitmap$0$1) {
  if (((bitmap$0$1.elem$1 & 2) === 0)) {
    incomplete$lzy$1.elem$1 = (this.len$2__p2__Lscala_collection_Seq__Lscala_runtime_IntRef__Lscala_runtime_VolatileByteRef__I(xs$1, len$lzy$1, bitmap$0$1) < count$1);
    bitmap$0$1.elem$1 = (bitmap$0$1.elem$1 | 2)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return incomplete$lzy$1.elem$1
});
ScalaJS.c.scala_collection_Iterator$GroupedIterator.prototype.incomplete$1__p2__I__Lscala_collection_Seq__Lscala_runtime_IntRef__Lscala_runtime_BooleanRef__Lscala_runtime_VolatileByteRef__Z = (function(count$1, xs$1, len$lzy$1, incomplete$lzy$1, bitmap$0$1) {
  if (((bitmap$0$1.elem$1 & 2) === 0)) {
    return this.incomplete$lzycompute$1__p2__I__Lscala_collection_Seq__Lscala_runtime_IntRef__Lscala_runtime_BooleanRef__Lscala_runtime_VolatileByteRef__Z(count$1, xs$1, len$lzy$1, incomplete$lzy$1, bitmap$0$1)
  } else {
    return incomplete$lzy$1.elem$1
  }
});
ScalaJS.c.scala_collection_Iterator$GroupedIterator.prototype.deliver$1__p2__I__I__Lscala_collection_Seq__Lscala_runtime_IntRef__Lscala_runtime_VolatileByteRef__Z = (function(howMany, prevSize$1, xs$1, len$lzy$1, bitmap$0$1) {
  if (((howMany > 0) && (this.isFirst$1__p2__I__Z(prevSize$1) || (this.len$2__p2__Lscala_collection_Seq__Lscala_runtime_IntRef__Lscala_runtime_VolatileByteRef__I(xs$1, len$lzy$1, bitmap$0$1) > this.gap__p2__I())))) {
    if ((!this.isFirst$1__p2__I__Z(prevSize$1))) {
      this.buffer$2.trimStart__I__V(ScalaJS.modules.scala_runtime_RichInt().min$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(this.scala$collection$Iterator$GroupedIterator$$step$f), prevSize$1))
    };
    if (this.isFirst$1__p2__I__Z(prevSize$1)) {
      var available = this.len$2__p2__Lscala_collection_Seq__Lscala_runtime_IntRef__Lscala_runtime_VolatileByteRef__I(xs$1, len$lzy$1, bitmap$0$1)
    } else {
      var available = ScalaJS.modules.scala_runtime_RichInt().min$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(howMany), (this.len$2__p2__Lscala_collection_Seq__Lscala_runtime_IntRef__Lscala_runtime_VolatileByteRef__I(xs$1, len$lzy$1, bitmap$0$1) - this.gap__p2__I()))
    };
    this.buffer$2.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_mutable_ArrayBuffer(ScalaJS.as.scala_collection_TraversableOnce(xs$1.takeRight__I__O(available)));
    this.filled$2 = true;
    return true
  } else {
    return false
  }
});
ScalaJS.c.scala_collection_Iterator$GroupedIterator.prototype.init___Lscala_collection_Iterator__Lscala_collection_Iterator__I__I = (function($$outer, self, size, step) {
  this.self$2 = self;
  this.scala$collection$Iterator$GroupedIterator$$size$f = size;
  this.scala$collection$Iterator$GroupedIterator$$step$f = step;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  ScalaJS.modules.scala_Predef().require__Z__Lscala_Function0__V(((size >= 1) && (step >= 1)), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
    return (function() {
      return new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("size=%d and step=%d, but both must be positive")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [ScalaJS.bI(arg$outer.scala$collection$Iterator$GroupedIterator$$size$f), ScalaJS.bI(arg$outer.scala$collection$Iterator$GroupedIterator$$step$f)])))
    })
  })(this)));
  this.buffer$2 = ScalaJS.as.scala_collection_mutable_ArrayBuffer(ScalaJS.modules.scala_collection_mutable_ArrayBuffer().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_collection_immutable_Nil()));
  this.filled$2 = false;
  this.$$undpartial$2 = true;
  this.scala$collection$Iterator$GroupedIterator$$pad$f = ScalaJS.modules.scala_None();
  return this
});
ScalaJS.c.scala_collection_Iterator$GroupedIterator.prototype.scala$collection$Iterator$GroupedIterator$$$outer__ = (function() {
  return this.scala$collection$Iterator$GroupedIterator$$$outer__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_Iterator$GroupedIterator.prototype.withPartial__Z__ = (function(x) {
  return this.withPartial__Z__Lscala_collection_Iterator$GroupedIterator(x)
});
ScalaJS.c.scala_collection_Iterator$GroupedIterator.prototype.withPadding__Lscala_Function0__ = (function(x$2) {
  return this.withPadding__Lscala_Function0__Lscala_collection_Iterator$GroupedIterator(x$2)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$GroupedIterator = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$GroupedIterator.prototype = ScalaJS.c.scala_collection_Iterator$GroupedIterator.prototype;
ScalaJS.is.scala_collection_Iterator$GroupedIterator = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$GroupedIterator)))
});
ScalaJS.as.scala_collection_Iterator$GroupedIterator = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$GroupedIterator(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$GroupedIterator")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$GroupedIterator = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$GroupedIterator)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$GroupedIterator = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$GroupedIterator(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$GroupedIterator;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$GroupedIterator = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$GroupedIterator: 0
}, false, "scala.collection.Iterator$GroupedIterator", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_Iterator$GroupedIterator: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$GroupedIterator.prototype.$classData = ScalaJS.data.scala_collection_Iterator$GroupedIterator;
//@ sourceMappingURL=Iterator$GroupedIterator.js.map
