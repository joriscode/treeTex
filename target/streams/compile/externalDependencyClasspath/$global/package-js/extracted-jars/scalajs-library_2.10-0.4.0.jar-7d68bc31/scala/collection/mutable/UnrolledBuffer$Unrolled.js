/** @constructor */
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.size$1 = 0;
  this.array$1 = null;
  this.next$1 = null;
  this.buff$1 = null;
  this.evidence$1$1 = null
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.constructor = ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled;
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.size__I = (function() {
  return this.size$1
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.size$und$eq__I__V = (function(x$1) {
  this.size$1 = x$1
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.array__O = (function() {
  return this.array$1
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.array$und$eq__O__V = (function(x$1) {
  this.array$1 = x$1
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.next__Lscala_collection_mutable_UnrolledBuffer$Unrolled = (function() {
  return this.next$1
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.next$und$eq__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V = (function(x$1) {
  this.next$1 = x$1
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.buff__Lscala_collection_mutable_UnrolledBuffer = (function() {
  return this.buff$1
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.nextlength__p1__I = (function() {
  if ((this.buff__Lscala_collection_mutable_UnrolledBuffer() === null)) {
    return ScalaJS.modules.scala_collection_mutable_UnrolledBuffer().unrolledlength__I()
  } else {
    return this.buff__Lscala_collection_mutable_UnrolledBuffer().calcNextLength__I__I(ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(this.array__O()))
  }
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.append__O__Lscala_collection_mutable_UnrolledBuffer$Unrolled = (function(elem) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((_$this.size__I() < ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(_$this.array__O()))) {
      ScalaJS.modules.scala_runtime_ScalaRunTime().array$undupdate__O__I__O__V(_$this.array__O(), _$this.size__I(), elem);
      _$this.size$und$eq__I__V((_$this.size__I() + 1));
      return _$this
    } else {
      _$this.next$und$eq__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V(new ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled().init___I__O__Lscala_collection_mutable_UnrolledBuffer$Unrolled__Lscala_collection_mutable_UnrolledBuffer__Lscala_reflect_ClassTag(0, _$this.evidence$1$1.newArray__I__O(_$this.nextlength__p1__I()), null, _$this.buff__Lscala_collection_mutable_UnrolledBuffer(), _$this.evidence$1$1));
      _$this = _$this.next__Lscala_collection_mutable_UnrolledBuffer$Unrolled();
      continue tailCallLoop
    }
  }
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.foreach__Lscala_Function1__V = (function(f) {
  var unrolled = this;
  var i = 0;
  while ((unrolled !== null)) {
    var chunkarr = unrolled.array__O();
    var chunksz = unrolled.size__I();
    while ((i < chunksz)) {
      var elem = ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(chunkarr, i);
      f.apply__O__O(elem);
      i = (i + 1)
    };
    i = 0;
    unrolled = unrolled.next__Lscala_collection_mutable_UnrolledBuffer$Unrolled()
  }
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.apply__I__O = (function(idx) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((idx < _$this.size__I())) {
      return ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(_$this.array__O(), idx)
    } else {
      var temp$_$this = _$this.next__Lscala_collection_mutable_UnrolledBuffer$Unrolled();
      var temp$idx = (idx - _$this.size__I());
      _$this = temp$_$this;
      idx = temp$idx;
      continue tailCallLoop
    }
  }
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.update__I__O__V = (function(idx, newelem) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((idx < _$this.size__I())) {
      ScalaJS.modules.scala_runtime_ScalaRunTime().array$undupdate__O__I__O__V(_$this.array__O(), idx, newelem);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    } else {
      var temp$_$this = _$this.next__Lscala_collection_mutable_UnrolledBuffer$Unrolled();
      var temp$idx = (idx - _$this.size__I());
      _$this = temp$_$this;
      idx = temp$idx;
      continue tailCallLoop;
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    };
    return undefined
  }
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.locate__I__Lscala_collection_mutable_UnrolledBuffer$Unrolled = (function(idx) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((idx < _$this.size__I())) {
      return _$this
    } else {
      var temp$_$this = _$this.next__Lscala_collection_mutable_UnrolledBuffer$Unrolled();
      var temp$idx = (idx - _$this.size__I());
      _$this = temp$_$this;
      idx = temp$idx;
      continue tailCallLoop
    }
  }
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.prepend__O__Lscala_collection_mutable_UnrolledBuffer$Unrolled = (function(elem) {
  if ((this.size__I() < ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(this.array__O()))) {
    this.shiftright__p1__V();
    ScalaJS.modules.scala_runtime_ScalaRunTime().array$undupdate__O__I__O__V(this.array__O(), 0, elem);
    this.size$und$eq__I__V((this.size__I() + 1));
    return this
  } else {
    var newhead = new ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled().init___Lscala_collection_mutable_UnrolledBuffer__Lscala_reflect_ClassTag(this.buff__Lscala_collection_mutable_UnrolledBuffer(), this.evidence$1$1);
    newhead.append__O__Lscala_collection_mutable_UnrolledBuffer$Unrolled(elem);
    newhead.next$und$eq__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V(this);
    return newhead
  }
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.shiftright__p1__V = (function() {
  var i = (this.size__I() - 1);
  while ((i >= 0)) {
    ScalaJS.modules.scala_runtime_ScalaRunTime().array$undupdate__O__I__O__V(this.array__O(), (i + 1), ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(this.array__O(), i));
    i = (i - 1)
  }
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.remove__I__Lscala_collection_mutable_UnrolledBuffer__O = (function(idx, buffer) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((idx < _$this.size__I())) {
      var r = ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(_$this.array__O(), idx);
      _$this.shiftleft__p1__I__V(idx);
      _$this.size$und$eq__I__V((_$this.size__I() - 1));
      if (_$this.tryMergeWithNext__Z()) {
        buffer.lastPtr$und$eq__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V(_$this)
      };
      return r
    } else {
      var temp$_$this = _$this.next__Lscala_collection_mutable_UnrolledBuffer$Unrolled();
      var temp$idx = (idx - _$this.size__I());
      _$this = temp$_$this;
      idx = temp$idx;
      continue tailCallLoop
    }
  }
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.shiftleft__p1__I__V = (function(leftb) {
  var i = leftb;
  while ((i < (this.size__I() - 1))) {
    ScalaJS.modules.scala_runtime_ScalaRunTime().array$undupdate__O__I__O__V(this.array__O(), i, ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(this.array__O(), (i + 1)));
    i = (i + 1)
  };
  this.nullout__p1__I__I__V(i, (i + 1))
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.tryMergeWithNext__Z = (function() {
  if (((!ScalaJS.anyRefEqEq(this.next__Lscala_collection_mutable_UnrolledBuffer$Unrolled(), null)) && ((this.size__I() + this.next__Lscala_collection_mutable_UnrolledBuffer$Unrolled().size__I()) < (((ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(this.array__O()) * ScalaJS.modules.scala_collection_mutable_UnrolledBuffer().waterline__I()) / ScalaJS.modules.scala_collection_mutable_UnrolledBuffer().waterlineDelim__I()) | 0)))) {
    ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(this.next__Lscala_collection_mutable_UnrolledBuffer$Unrolled().array__O(), 0, this.array__O(), this.size__I(), this.next__Lscala_collection_mutable_UnrolledBuffer$Unrolled().size__I());
    this.size$und$eq__I__V((this.size__I() + this.next__Lscala_collection_mutable_UnrolledBuffer$Unrolled().size__I()));
    this.next$und$eq__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V(this.next__Lscala_collection_mutable_UnrolledBuffer$Unrolled().next__Lscala_collection_mutable_UnrolledBuffer$Unrolled());
    if ((this.next__Lscala_collection_mutable_UnrolledBuffer$Unrolled() === null)) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.insertAll__I__Lscala_collection_Traversable__Lscala_collection_mutable_UnrolledBuffer__V = (function(idx, t, buffer) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((idx < _$this.size__I())) {
      var newnextnode = new ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled().init___I__O__Lscala_collection_mutable_UnrolledBuffer$Unrolled__Lscala_collection_mutable_UnrolledBuffer__Lscala_reflect_ClassTag(0, _$this.evidence$1$1.newArray__I__O(ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(_$this.array__O())), null, _$this.buff__Lscala_collection_mutable_UnrolledBuffer(), _$this.evidence$1$1);
      ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(_$this.array__O(), idx, newnextnode.array__O(), 0, (_$this.size__I() - idx));
      newnextnode.size$und$eq__I__V((_$this.size__I() - idx));
      newnextnode.next$und$eq__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V(_$this.next__Lscala_collection_mutable_UnrolledBuffer$Unrolled());
      _$this.nullout__p1__I__I__V(idx, _$this.size__I());
      _$this.size$und$eq__I__V(idx);
      _$this.next$und$eq__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V(null);
      var temp1 = _$this;
      var curr = new ScalaJS.c.scala_runtime_ObjectRef().init___O(temp1);
      t.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(curr$1) {
        return (function(elem$10) {
          curr$1.elem$1 = ScalaJS.as.scala_collection_mutable_UnrolledBuffer$Unrolled(curr$1.elem$1).append__O__Lscala_collection_mutable_UnrolledBuffer$Unrolled(elem$10);
          return ScalaJS.bV(undefined)
        })
      })(curr)));
      ScalaJS.as.scala_collection_mutable_UnrolledBuffer$Unrolled(curr.elem$1).next$und$eq__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V(newnextnode);
      if (ScalaJS.as.scala_collection_mutable_UnrolledBuffer$Unrolled(curr.elem$1).tryMergeWithNext__Z()) {
        buffer.lastPtr$und$eq__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V(ScalaJS.as.scala_collection_mutable_UnrolledBuffer$Unrolled(curr.elem$1));
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      } else {
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      }
    } else {
      idx = (idx - _$this.size__I());
      continue tailCallLoop;
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    };
    return undefined
  }
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.nullout__p1__I__I__V = (function(from, until) {
  var idx = from;
  while ((idx < until)) {
    ScalaJS.modules.scala_runtime_ScalaRunTime().array$undupdate__O__I__O__V(this.array__O(), idx, null);
    idx = (idx + 1)
  }
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.bind__Lscala_collection_mutable_UnrolledBuffer$Unrolled__Z = (function(thathead) {
  ScalaJS.modules.scala_Predef().assert__Z__V((this.next__Lscala_collection_mutable_UnrolledBuffer$Unrolled() === null));
  this.next$und$eq__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V(thathead);
  return this.tryMergeWithNext__Z()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.toString__T = (function() {
  var jsx$2 = (("" + ScalaJS.modules.scala_Predef().genericArrayOps__O__Lscala_collection_mutable_ArrayOps(ScalaJS.modules.scala_Predef().genericArrayOps__O__Lscala_collection_mutable_ArrayOps(this.array__O()).take__I__O(this.size__I())).mkString__T__T__T__T((("Unrolled[" + ScalaJS.bI(ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(this.array__O()))) + "]("), ", ", ")")) + " -> ");
  if ((this.next__Lscala_collection_mutable_UnrolledBuffer$Unrolled() !== null)) {
    var jsx$1 = this.next__Lscala_collection_mutable_UnrolledBuffer$Unrolled().toString__T()
  } else {
    var jsx$1 = ""
  };
  return (jsx$2 + jsx$1)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.init___I__O__Lscala_collection_mutable_UnrolledBuffer$Unrolled__Lscala_collection_mutable_UnrolledBuffer__Lscala_reflect_ClassTag = (function(size, array, next, buff, evidence$1) {
  this.size$1 = size;
  this.array$1 = array;
  this.next$1 = next;
  this.buff$1 = buff;
  this.evidence$1$1 = evidence$1;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.init___Lscala_reflect_ClassTag = (function(evidence$2) {
  ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.init___I__O__Lscala_collection_mutable_UnrolledBuffer$Unrolled__Lscala_collection_mutable_UnrolledBuffer__Lscala_reflect_ClassTag.call(this, 0, evidence$2.newArray__I__O(ScalaJS.modules.scala_collection_mutable_UnrolledBuffer().unrolledlength__I()), null, null, evidence$2);
  return this
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.init___Lscala_collection_mutable_UnrolledBuffer__Lscala_reflect_ClassTag = (function(b, evidence$3) {
  ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.init___I__O__Lscala_collection_mutable_UnrolledBuffer$Unrolled__Lscala_collection_mutable_UnrolledBuffer__Lscala_reflect_ClassTag.call(this, 0, evidence$3.newArray__I__O(ScalaJS.modules.scala_collection_mutable_UnrolledBuffer().unrolledlength__I()), null, b, evidence$3);
  return this
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.bind__Lscala_collection_mutable_UnrolledBuffer$Unrolled__ = (function(thathead) {
  return ScalaJS.bZ(this.bind__Lscala_collection_mutable_UnrolledBuffer$Unrolled__Z(thathead))
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.insertAll__I__Lscala_collection_Traversable__Lscala_collection_mutable_UnrolledBuffer__ = (function(idx, t, buffer) {
  return ScalaJS.bV(this.insertAll__I__Lscala_collection_Traversable__Lscala_collection_mutable_UnrolledBuffer__V(idx, t, buffer))
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.tryMergeWithNext__ = (function() {
  return ScalaJS.bZ(this.tryMergeWithNext__Z())
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.remove__I__Lscala_collection_mutable_UnrolledBuffer__ = (function(idx$2, buffer$2) {
  return this.remove__I__Lscala_collection_mutable_UnrolledBuffer__O(idx$2, buffer$2)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.prepend__O__ = (function(elem) {
  return this.prepend__O__Lscala_collection_mutable_UnrolledBuffer$Unrolled(elem)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.locate__I__ = (function(idx$3) {
  return this.locate__I__Lscala_collection_mutable_UnrolledBuffer$Unrolled(idx$3)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.update__I__O__ = (function(idx$4, newelem) {
  return ScalaJS.bV(this.update__I__O__V(idx$4, newelem))
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.apply__I__ = (function(idx$5) {
  return this.apply__I__O(idx$5)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.foreach__Lscala_Function1__ = (function(f) {
  return ScalaJS.bV(this.foreach__Lscala_Function1__V(f))
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.append__O__ = (function(elem$2) {
  return this.append__O__Lscala_collection_mutable_UnrolledBuffer$Unrolled(elem$2)
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.buff__ = (function() {
  return this.buff__Lscala_collection_mutable_UnrolledBuffer()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.next$und$eq__Lscala_collection_mutable_UnrolledBuffer$Unrolled__ = (function(x$1) {
  return ScalaJS.bV(this.next$und$eq__Lscala_collection_mutable_UnrolledBuffer$Unrolled__V(x$1))
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.next__ = (function() {
  return this.next__Lscala_collection_mutable_UnrolledBuffer$Unrolled()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.array$und$eq__O__ = (function(x$1$2) {
  return ScalaJS.bV(this.array$und$eq__O__V(x$1$2))
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.array__ = (function() {
  return this.array__O()
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.size$und$eq__I__ = (function(x$1$3) {
  return ScalaJS.bV(this.size$und$eq__I__V(x$1$3))
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.size__ = (function() {
  return ScalaJS.bI(this.size__I())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_UnrolledBuffer$Unrolled = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype = ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype;
ScalaJS.is.scala_collection_mutable_UnrolledBuffer$Unrolled = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_UnrolledBuffer$Unrolled)))
});
ScalaJS.as.scala_collection_mutable_UnrolledBuffer$Unrolled = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_UnrolledBuffer$Unrolled(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.UnrolledBuffer$Unrolled")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_UnrolledBuffer$Unrolled = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_UnrolledBuffer$Unrolled)))
});
ScalaJS.asArrayOf.scala_collection_mutable_UnrolledBuffer$Unrolled = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_UnrolledBuffer$Unrolled(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.UnrolledBuffer$Unrolled;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_UnrolledBuffer$Unrolled = new ScalaJS.ClassTypeData({
  scala_collection_mutable_UnrolledBuffer$Unrolled: 0
}, false, "scala.collection.mutable.UnrolledBuffer$Unrolled", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_UnrolledBuffer$Unrolled: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_UnrolledBuffer$Unrolled.prototype.$classData = ScalaJS.data.scala_collection_mutable_UnrolledBuffer$Unrolled;
//@ sourceMappingURL=UnrolledBuffer$Unrolled.js.map
