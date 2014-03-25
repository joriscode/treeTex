/** @constructor */
ScalaJS.c.scala_collection_concurrent_INode = (function() {
  ScalaJS.c.scala_collection_concurrent_INodeBase.call(this)
});
ScalaJS.c.scala_collection_concurrent_INode.prototype = new ScalaJS.inheritable.scala_collection_concurrent_INodeBase();
ScalaJS.c.scala_collection_concurrent_INode.prototype.constructor = ScalaJS.c.scala_collection_concurrent_INode;
ScalaJS.c.scala_collection_concurrent_INode.prototype.WRITE__Lscala_collection_concurrent_MainNode__V = (function(nval) {
  ScalaJS.modules.scala_collection_concurrent_INodeBase().updater__Ljava_util_concurrent_atomic_AtomicReferenceFieldUpdater().set__O__O__V(this, nval)
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.CAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Z = (function(old, n) {
  return ScalaJS.modules.scala_collection_concurrent_INodeBase().updater__Ljava_util_concurrent_atomic_AtomicReferenceFieldUpdater().compareAndSet__O__O__O__Z(this, old, n)
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.gcasRead__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_MainNode = (function(ct) {
  return this.GCAS$undREAD__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_MainNode(ct)
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.GCAS$undREAD__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_MainNode = (function(ct) {
  var m = this.mainnode$f;
  var prevval = m.prev$f;
  if ((prevval === null)) {
    return m
  } else {
    return this.GCAS$undComplete__p3__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_MainNode(m, ct)
  }
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.GCAS$undComplete__p3__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_MainNode = (function(m, ct) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((m === null)) {
      return null
    } else {
      var prev = m.prev$f;
      var ctr = ct.readRoot__Z__Lscala_collection_concurrent_INode(true);
      var x1 = prev;
      if (ScalaJS.anyRefEqEq(null, x1)) {
        return m
      };
      if (ScalaJS.is.scala_collection_concurrent_FailedNode(x1)) {
        var x3 = ScalaJS.as.scala_collection_concurrent_FailedNode(x1);
        if (_$this.CAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Z(m, x3.prev$f)) {
          return x3.prev$f
        } else {
          m = _$this.mainnode$f;
          continue tailCallLoop
        }
      };
      if ((x1 !== null)) {
        if (((ctr.gen$f === _$this.gen$f) && ct.nonReadOnly__Z())) {
          if (m.CAS$undPREV__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Z(prev, null)) {
            return m
          } else {
            continue tailCallLoop
          }
        } else {
          m.CAS$undPREV__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Z(prev, new ScalaJS.c.scala_collection_concurrent_FailedNode().init___Lscala_collection_concurrent_MainNode(prev));
          m = _$this.mainnode$f;
          continue tailCallLoop
        }
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    }
  }
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.GCAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_TrieMap__Z = (function(old, n, ct) {
  n.WRITE$undPREV__Lscala_collection_concurrent_MainNode__V(old);
  if (this.CAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Z(old, n)) {
    this.GCAS$undComplete__p3__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_MainNode(n, ct);
    return (n.prev$f === null)
  } else {
    return false
  }
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.equal__p3__O__O__Lscala_collection_concurrent_TrieMap__Z = (function(k1, k2, ct) {
  return ct.equality__Lscala_math_Equiv().equiv__O__O__Z(k1, k2)
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.inode__p3__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_INode = (function(cn) {
  var nin = new ScalaJS.c.scala_collection_concurrent_INode().init___Lscala_collection_concurrent_Gen(this.gen$f);
  nin.WRITE__Lscala_collection_concurrent_MainNode__V(cn);
  return nin
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.copyToGen__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_INode = (function(ngen, ct) {
  var nin = new ScalaJS.c.scala_collection_concurrent_INode().init___Lscala_collection_concurrent_Gen(ngen);
  var main = this.GCAS$undREAD__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_MainNode(ct);
  nin.WRITE__Lscala_collection_concurrent_MainNode__V(main);
  return nin
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.rec$undinsert__O__O__I__I__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__Z = (function(k, v, hc, lev, parent, startgen, ct) {
  var _$this = this;
  tailCallLoop: while (true) {
    var m = _$this.GCAS$undREAD__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_MainNode(ct);
    var x1 = m;
    if (ScalaJS.is.scala_collection_concurrent_CNode(x1)) {
      var x2 = ScalaJS.as.scala_collection_concurrent_CNode(x1);
      var idx = ((hc >>> lev) & 31);
      var flag = (1 << idx);
      var bmp = x2.bitmap__I();
      var mask = (flag - 1);
      var pos = ScalaJS.modules.java_lang_Integer().bitCount__I__I((bmp & mask));
      if (((bmp & flag) !== 0)) {
        var x1$2 = x2.array__ALscala_collection_concurrent_BasicNode().underlying[pos];
        if (ScalaJS.is.scala_collection_concurrent_INode(x1$2)) {
          var x2$2 = ScalaJS.as.scala_collection_concurrent_INode(x1$2);
          if ((startgen === x2$2.gen$f)) {
            var temp$_$this = x2$2;
            var temp$lev = (lev + 5);
            var temp$parent = _$this;
            _$this = temp$_$this;
            lev = temp$lev;
            parent = temp$parent;
            continue tailCallLoop
          } else {
            if (_$this.GCAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_TrieMap__Z(x2, x2.renewed__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_CNode(startgen, ct), ct)) {
              continue tailCallLoop
            } else {
              return false
            }
          }
        };
        if (ScalaJS.is.scala_collection_concurrent_SNode(x1$2)) {
          var x3 = ScalaJS.as.scala_collection_concurrent_SNode(x1$2);
          if (((x3.hc__I() === hc) && _$this.equal__p3__O__O__Lscala_collection_concurrent_TrieMap__Z(x3.k__O(), k, ct))) {
            return _$this.GCAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_TrieMap__Z(x2, x2.updatedAt__I__Lscala_collection_concurrent_BasicNode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_CNode(pos, new ScalaJS.c.scala_collection_concurrent_SNode().init___O__O__I(k, v, hc), _$this.gen$f), ct)
          } else {
            if ((x2.gen__Lscala_collection_concurrent_Gen() === _$this.gen$f)) {
              var rn = x2
            } else {
              var rn = x2.renewed__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_CNode(_$this.gen$f, ct)
            };
            var nn = rn.updatedAt__I__Lscala_collection_concurrent_BasicNode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_CNode(pos, _$this.inode__p3__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_INode(ScalaJS.modules.scala_collection_concurrent_CNode().dual__Lscala_collection_concurrent_SNode__I__Lscala_collection_concurrent_SNode__I__I__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_MainNode(x3, x3.hc__I(), new ScalaJS.c.scala_collection_concurrent_SNode().init___O__O__I(k, v, hc), hc, (lev + 5), _$this.gen$f)), _$this.gen$f);
            return _$this.GCAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_TrieMap__Z(x2, nn, ct)
          }
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1$2)
      } else {
        if ((x2.gen__Lscala_collection_concurrent_Gen() === _$this.gen$f)) {
          var rn$2 = x2
        } else {
          var rn$2 = x2.renewed__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_CNode(_$this.gen$f, ct)
        };
        var ncnode = rn$2.insertedAt__I__I__Lscala_collection_concurrent_BasicNode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_CNode(pos, flag, new ScalaJS.c.scala_collection_concurrent_SNode().init___O__O__I(k, v, hc), _$this.gen$f);
        return _$this.GCAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_TrieMap__Z(x2, ncnode, ct)
      }
    };
    if (ScalaJS.is.scala_collection_concurrent_TNode(x1)) {
      _$this.clean__p3__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_TrieMap__I__V(parent, ct, (lev - 5));
      return false
    };
    if (ScalaJS.is.scala_collection_concurrent_LNode(x1)) {
      var x4 = ScalaJS.as.scala_collection_concurrent_LNode(x1);
      var nn$2 = x4.inserted__O__O__Lscala_collection_concurrent_LNode(k, v);
      return _$this.GCAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_TrieMap__Z(x4, nn$2, ct)
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  }
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.rec$undinsertif__O__O__I__O__I__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__Lscala_Option = (function(k, v, hc, cond, lev, parent, startgen, ct) {
  var _$this = this;
  tailCallLoop: while (true) {
    var m = _$this.GCAS$undREAD__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_MainNode(ct);
    var x1 = m;
    if (ScalaJS.is.scala_collection_concurrent_CNode(x1)) {
      var x2 = ScalaJS.as.scala_collection_concurrent_CNode(x1);
      var idx = ((hc >>> lev) & 31);
      var flag = (1 << idx);
      var bmp = x2.bitmap__I();
      var mask = (flag - 1);
      var pos = ScalaJS.modules.java_lang_Integer().bitCount__I__I((bmp & mask));
      if (((bmp & flag) !== 0)) {
        var x1$2 = x2.array__ALscala_collection_concurrent_BasicNode().underlying[pos];
        if (ScalaJS.is.scala_collection_concurrent_INode(x1$2)) {
          var x2$2 = ScalaJS.as.scala_collection_concurrent_INode(x1$2);
          if ((startgen === x2$2.gen$f)) {
            var temp$_$this = x2$2;
            var temp$lev = (lev + 5);
            var temp$parent = _$this;
            _$this = temp$_$this;
            lev = temp$lev;
            parent = temp$parent;
            continue tailCallLoop
          } else {
            if (_$this.GCAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_TrieMap__Z(x2, x2.renewed__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_CNode(startgen, ct), ct)) {
              continue tailCallLoop
            } else {
              return null
            }
          }
        };
        if (ScalaJS.is.scala_collection_concurrent_SNode(x1$2)) {
          var x3 = ScalaJS.as.scala_collection_concurrent_SNode(x1$2);
          var x1$3 = cond;
          if (ScalaJS.anyRefEqEq(null, x1$3)) {
            if (((x3.hc__I() === hc) && _$this.equal__p3__O__O__Lscala_collection_concurrent_TrieMap__Z(x3.k__O(), k, ct))) {
              if (_$this.GCAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_TrieMap__Z(x2, x2.updatedAt__I__Lscala_collection_concurrent_BasicNode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_CNode(pos, new ScalaJS.c.scala_collection_concurrent_SNode().init___O__O__I(k, v, hc), _$this.gen$f), ct)) {
                return new ScalaJS.c.scala_Some().init___O(x3.v__O())
              } else {
                return null
              }
            } else {
              if ((x2.gen__Lscala_collection_concurrent_Gen() === _$this.gen$f)) {
                var rn = x2
              } else {
                var rn = x2.renewed__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_CNode(_$this.gen$f, ct)
              };
              var nn = rn.updatedAt__I__Lscala_collection_concurrent_BasicNode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_CNode(pos, _$this.inode__p3__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_INode(ScalaJS.modules.scala_collection_concurrent_CNode().dual__Lscala_collection_concurrent_SNode__I__Lscala_collection_concurrent_SNode__I__I__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_MainNode(x3, x3.hc__I(), new ScalaJS.c.scala_collection_concurrent_SNode().init___O__O__I(k, v, hc), hc, (lev + 5), _$this.gen$f)), _$this.gen$f);
              if (_$this.GCAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_TrieMap__Z(x2, nn, ct)) {
                return ScalaJS.modules.scala_None()
              } else {
                return null
              }
            }
          };
          if (ScalaJS.anyEqEq(ScalaJS.modules.scala_collection_concurrent_INode().KEY$undABSENT__O(), x1$3)) {
            if (((x3.hc__I() === hc) && _$this.equal__p3__O__O__Lscala_collection_concurrent_TrieMap__Z(x3.k__O(), k, ct))) {
              return new ScalaJS.c.scala_Some().init___O(x3.v__O())
            } else {
              if ((x2.gen__Lscala_collection_concurrent_Gen() === _$this.gen$f)) {
                var rn$2 = x2
              } else {
                var rn$2 = x2.renewed__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_CNode(_$this.gen$f, ct)
              };
              var nn$2 = rn$2.updatedAt__I__Lscala_collection_concurrent_BasicNode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_CNode(pos, _$this.inode__p3__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_INode(ScalaJS.modules.scala_collection_concurrent_CNode().dual__Lscala_collection_concurrent_SNode__I__Lscala_collection_concurrent_SNode__I__I__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_MainNode(x3, x3.hc__I(), new ScalaJS.c.scala_collection_concurrent_SNode().init___O__O__I(k, v, hc), hc, (lev + 5), _$this.gen$f)), _$this.gen$f);
              if (_$this.GCAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_TrieMap__Z(x2, nn$2, ct)) {
                return ScalaJS.modules.scala_None()
              } else {
                return null
              }
            }
          };
          if (ScalaJS.anyEqEq(ScalaJS.modules.scala_collection_concurrent_INode().KEY$undPRESENT__O(), x1$3)) {
            if (((x3.hc__I() === hc) && _$this.equal__p3__O__O__Lscala_collection_concurrent_TrieMap__Z(x3.k__O(), k, ct))) {
              if (_$this.GCAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_TrieMap__Z(x2, x2.updatedAt__I__Lscala_collection_concurrent_BasicNode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_CNode(pos, new ScalaJS.c.scala_collection_concurrent_SNode().init___O__O__I(k, v, hc), _$this.gen$f), ct)) {
                return new ScalaJS.c.scala_Some().init___O(x3.v__O())
              } else {
                return null
              }
            } else {
              return ScalaJS.modules.scala_None()
            }
          };
          if ((((x3.hc__I() === hc) && _$this.equal__p3__O__O__Lscala_collection_concurrent_TrieMap__Z(x3.k__O(), k, ct)) && ScalaJS.anyEqEq(x3.v__O(), x1$3))) {
            if (_$this.GCAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_TrieMap__Z(x2, x2.updatedAt__I__Lscala_collection_concurrent_BasicNode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_CNode(pos, new ScalaJS.c.scala_collection_concurrent_SNode().init___O__O__I(k, v, hc), _$this.gen$f), ct)) {
              return new ScalaJS.c.scala_Some().init___O(x3.v__O())
            } else {
              return null
            }
          } else {
            return ScalaJS.modules.scala_None()
          }
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1$2)
      } else {
        var x1$4 = cond;
        matchEnd9: {
          if (ScalaJS.anyRefEqEq(null, x1$4)) {
            var jsx$1 = true;
            break matchEnd9
          };
          if (ScalaJS.anyEqEq(ScalaJS.modules.scala_collection_concurrent_INode().KEY$undABSENT__O(), x1$4)) {
            var jsx$1 = true;
            break matchEnd9
          };
          var jsx$1 = false;
          break matchEnd9
        };
        if (jsx$1) {
          if ((x2.gen__Lscala_collection_concurrent_Gen() === _$this.gen$f)) {
            var rn$3 = x2
          } else {
            var rn$3 = x2.renewed__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_CNode(_$this.gen$f, ct)
          };
          var ncnode = rn$3.insertedAt__I__I__Lscala_collection_concurrent_BasicNode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_CNode(pos, flag, new ScalaJS.c.scala_collection_concurrent_SNode().init___O__O__I(k, v, hc), _$this.gen$f);
          if (_$this.GCAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_TrieMap__Z(x2, ncnode, ct)) {
            return ScalaJS.modules.scala_None()
          } else {
            return null
          }
        };
        if (ScalaJS.anyEqEq(ScalaJS.modules.scala_collection_concurrent_INode().KEY$undPRESENT__O(), x1$4)) {
          return ScalaJS.modules.scala_None()
        };
        return ScalaJS.modules.scala_None()
      }
    };
    if (ScalaJS.is.scala_collection_concurrent_TNode(x1)) {
      _$this.clean__p3__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_TrieMap__I__V(parent, ct, (lev - 5));
      return null
    };
    if (ScalaJS.is.scala_collection_concurrent_LNode(x1)) {
      var x4 = ScalaJS.as.scala_collection_concurrent_LNode(x1);
      var x1$5 = cond;
      if (ScalaJS.anyRefEqEq(null, x1$5)) {
        var optv = x4.get__O__Lscala_Option(k);
        if (_$this.insertln$1__p3__O__O__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_LNode__Z(k, v, ct, x4)) {
          return optv
        } else {
          return null
        }
      };
      if (ScalaJS.anyEqEq(ScalaJS.modules.scala_collection_concurrent_INode().KEY$undABSENT__O(), x1$5)) {
        var x1$6 = x4.get__O__Lscala_Option(k);
        if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1$6)) {
          if (_$this.insertln$1__p3__O__O__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_LNode__Z(k, v, ct, x4)) {
            return ScalaJS.modules.scala_None()
          } else {
            return null
          }
        };
        return x1$6
      };
      if (ScalaJS.anyEqEq(ScalaJS.modules.scala_collection_concurrent_INode().KEY$undPRESENT__O(), x1$5)) {
        var x1$7 = x4.get__O__Lscala_Option(k);
        if (ScalaJS.is.scala_Some(x1$7)) {
          var x2$3 = ScalaJS.as.scala_Some(x1$7);
          var v0 = x2$3.x__O();
          if (_$this.insertln$1__p3__O__O__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_LNode__Z(k, v, ct, x4)) {
            return new ScalaJS.c.scala_Some().init___O(v0)
          } else {
            return null
          }
        };
        if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1$7)) {
          return ScalaJS.modules.scala_None()
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1$7)
      };
      var x1$8 = x4.get__O__Lscala_Option(k);
      if (ScalaJS.is.scala_Some(x1$8)) {
        var x2$4 = ScalaJS.as.scala_Some(x1$8);
        var v0$2 = x2$4.x__O();
        if (ScalaJS.anyEqEq(v0$2, x1$5)) {
          if (_$this.insertln$1__p3__O__O__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_LNode__Z(k, v, ct, x4)) {
            return new ScalaJS.c.scala_Some().init___O(x1$5)
          } else {
            return null
          }
        }
      };
      return ScalaJS.modules.scala_None()
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  }
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.rec$undlookup__O__I__I__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__O = (function(k, hc, lev, parent, startgen, ct) {
  var _$this = this;
  tailCallLoop: while (true) {
    var m = _$this.GCAS$undREAD__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_MainNode(ct);
    var x1 = m;
    if (ScalaJS.is.scala_collection_concurrent_CNode(x1)) {
      var x2 = ScalaJS.as.scala_collection_concurrent_CNode(x1);
      var idx = ((hc >>> lev) & 31);
      var flag = (1 << idx);
      var bmp = x2.bitmap__I();
      if (((bmp & flag) === 0)) {
        return null
      } else {
        if ((bmp === -1)) {
          var pos = idx
        } else {
          var pos = ScalaJS.modules.java_lang_Integer().bitCount__I__I((bmp & (flag - 1)))
        };
        var sub = x2.array__ALscala_collection_concurrent_BasicNode().underlying[pos];
        var x1$2 = sub;
        if (ScalaJS.is.scala_collection_concurrent_INode(x1$2)) {
          var x2$2 = ScalaJS.as.scala_collection_concurrent_INode(x1$2);
          if ((ct.isReadOnly__Z() || (startgen === x2$2.gen$f))) {
            var temp$_$this = x2$2;
            var temp$lev = (lev + 5);
            var temp$parent = _$this;
            _$this = temp$_$this;
            lev = temp$lev;
            parent = temp$parent;
            continue tailCallLoop
          } else {
            if (_$this.GCAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_TrieMap__Z(x2, x2.renewed__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_CNode(startgen, ct), ct)) {
              continue tailCallLoop
            } else {
              return ScalaJS.modules.scala_collection_concurrent_INodeBase().RESTART__O()
            }
          }
        };
        if (ScalaJS.is.scala_collection_concurrent_SNode(x1$2)) {
          var x3 = ScalaJS.as.scala_collection_concurrent_SNode(x1$2);
          if (((x3.hc__I() === hc) && _$this.equal__p3__O__O__Lscala_collection_concurrent_TrieMap__Z(x3.k__O(), k, ct))) {
            return x3.v__O()
          } else {
            return null
          }
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1$2)
      }
    };
    if (ScalaJS.is.scala_collection_concurrent_TNode(x1)) {
      var x3$2 = ScalaJS.as.scala_collection_concurrent_TNode(x1);
      return _$this.cleanReadOnly$1__p3__Lscala_collection_concurrent_TNode__O__I__I__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_TrieMap__O(x3$2, k, hc, lev, parent, ct)
    };
    if (ScalaJS.is.scala_collection_concurrent_LNode(x1)) {
      var x4 = ScalaJS.as.scala_collection_concurrent_LNode(x1);
      return x4.get__O__Lscala_Option(k).orNull__Lscala_Predef$$less$colon$less__O(ScalaJS.modules.scala_Predef().conforms__Lscala_Predef$$less$colon$less())
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  }
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.rec$undremove__O__O__I__I__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__Lscala_Option = (function(k, v, hc, lev, parent, startgen, ct) {
  var m = this.GCAS$undREAD__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_MainNode(ct);
  var x1 = m;
  if (ScalaJS.is.scala_collection_concurrent_CNode(x1)) {
    var x2 = ScalaJS.as.scala_collection_concurrent_CNode(x1);
    var idx = ((hc >>> lev) & 31);
    var bmp = x2.bitmap__I();
    var flag = (1 << idx);
    if (((bmp & flag) === 0)) {
      return ScalaJS.modules.scala_None()
    } else {
      var pos = ScalaJS.modules.java_lang_Integer().bitCount__I__I((bmp & (flag - 1)));
      var sub = x2.array__ALscala_collection_concurrent_BasicNode().underlying[pos];
      var x1$2 = sub;
      matchEnd5: {
        if (ScalaJS.is.scala_collection_concurrent_INode(x1$2)) {
          var x2$2 = ScalaJS.as.scala_collection_concurrent_INode(x1$2);
          if ((startgen === x2$2.gen$f)) {
            var res = x2$2.rec$undremove__O__O__I__I__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__Lscala_Option(k, v, hc, (lev + 5), this, startgen, ct);
            break matchEnd5
          } else {
            if (this.GCAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_TrieMap__Z(x2, x2.renewed__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_CNode(startgen, ct), ct)) {
              var res = this.rec$undremove__O__O__I__I__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__Lscala_Option(k, v, hc, lev, parent, startgen, ct);
              break matchEnd5
            } else {
              var res = null;
              break matchEnd5
            }
          }
        };
        if (ScalaJS.is.scala_collection_concurrent_SNode(x1$2)) {
          var x3 = ScalaJS.as.scala_collection_concurrent_SNode(x1$2);
          if ((((x3.hc__I() === hc) && this.equal__p3__O__O__Lscala_collection_concurrent_TrieMap__Z(x3.k__O(), k, ct)) && (ScalaJS.anyRefEqEq(v, null) || ScalaJS.anyEqEq(x3.v__O(), v)))) {
            var ncn = x2.removedAt__I__I__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_CNode(pos, flag, this.gen$f).toContracted__I__Lscala_collection_concurrent_MainNode(lev);
            if (this.GCAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_TrieMap__Z(x2, ncn, ct)) {
              var res = new ScalaJS.c.scala_Some().init___O(x3.v__O());
              break matchEnd5
            } else {
              var res = null;
              break matchEnd5
            }
          } else {
            var res = ScalaJS.modules.scala_None();
            break matchEnd5
          }
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1$2)
      };
      if ((ScalaJS.anyRefEqEq(res, ScalaJS.modules.scala_None()) || (res === null))) {
        return res
      } else {
        if ((parent !== null)) {
          var n = this.GCAS$undREAD__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_MainNode(ct);
          if (ScalaJS.is.scala_collection_concurrent_TNode(n)) {
            this.cleanParent$1__p3__O__I__I__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__V(n, hc, lev, parent, startgen, ct)
          }
        };
        return res
      }
    }
  };
  if (ScalaJS.is.scala_collection_concurrent_TNode(x1)) {
    this.clean__p3__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_TrieMap__I__V(parent, ct, (lev - 5));
    return null
  };
  if (ScalaJS.is.scala_collection_concurrent_LNode(x1)) {
    var x4 = ScalaJS.as.scala_collection_concurrent_LNode(x1);
    if (ScalaJS.anyRefEqEq(v, null)) {
      var optv = x4.get__O__Lscala_Option(k);
      var nn = x4.removed__O__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_MainNode(k, ct);
      if (this.GCAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_TrieMap__Z(x4, nn, ct)) {
        return optv
      } else {
        return null
      }
    } else {
      var x1$3 = x4.get__O__Lscala_Option(k);
      if (ScalaJS.is.scala_Some(x1$3)) {
        var x2$3 = ScalaJS.as.scala_Some(x1$3);
        var v0 = x2$3.x__O();
        if (ScalaJS.anyEqEq(v0, v)) {
          var nn$2 = x4.removed__O__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_MainNode(k, ct);
          if (this.GCAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_TrieMap__Z(x4, nn$2, ct)) {
            return x2$3
          } else {
            return null
          }
        }
      };
      return ScalaJS.modules.scala_None()
    }
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.clean__p3__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_TrieMap__I__V = (function(nd, ct, lev) {
  var m = nd.GCAS$undREAD__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_MainNode(ct);
  var x1 = m;
  matchEnd4: {
    if (ScalaJS.is.scala_collection_concurrent_CNode(x1)) {
      var x2 = ScalaJS.as.scala_collection_concurrent_CNode(x1);
      nd.GCAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_TrieMap__Z(x2, x2.toCompressed__Lscala_collection_concurrent_TrieMap__I__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_MainNode(ct, lev, this.gen$f), ct);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd4
    };
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
    break matchEnd4
  }
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.isNullInode__Lscala_collection_concurrent_TrieMap__Z = (function(ct) {
  return (this.GCAS$undREAD__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_MainNode(ct) === null)
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.cachedSize__Lscala_collection_concurrent_TrieMap__I = (function(ct) {
  var m = this.GCAS$undREAD__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_MainNode(ct);
  return m.cachedSize__O__I(ct)
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.string__I__T = (function(lev) {
  var jsx$9 = new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("%sINode -> %s"));
  var jsx$8 = ScalaJS.modules.scala_Predef();
  var jsx$7 = ScalaJS.data.java_lang_Object.getArrayOf();
  var jsx$6 = new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("  ")).$$times__I__T(lev);
  var x1 = this.mainnode$f;
  matchEnd7: {
    if (ScalaJS.anyRefEqEq(null, x1)) {
      var jsx$5 = "<null>";
      break matchEnd7
    };
    if (ScalaJS.is.scala_collection_concurrent_TNode(x1)) {
      var x3 = ScalaJS.as.scala_collection_concurrent_TNode(x1);
      var jsx$5 = new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("TNode(%s, %s, %d, !)")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [x3.k__O(), x3.v__O(), ScalaJS.bI(x3.hc__I())])));
      break matchEnd7
    };
    if (ScalaJS.is.scala_collection_concurrent_CNode(x1)) {
      var x4 = ScalaJS.as.scala_collection_concurrent_CNode(x1);
      var jsx$5 = x4.string__I__T(lev);
      break matchEnd7
    };
    if (ScalaJS.is.scala_collection_concurrent_LNode(x1)) {
      var x5 = ScalaJS.as.scala_collection_concurrent_LNode(x1);
      var jsx$5 = x5.string__I__T(lev);
      break matchEnd7
    };
    var jsx$5 = new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("<elem: %s>")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [x1])));
    break matchEnd7
  };
  var jsx$4 = [jsx$6, jsx$5];
  var jsx$3 = ScalaJS.makeNativeArrayWrapper(jsx$7, jsx$4);
  var jsx$2 = jsx$8.genericWrapArray__O__Lscala_collection_mutable_WrappedArray(jsx$3);
  return jsx$9.format__Lscala_collection_Seq__T(jsx$2)
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.insertln$1__p3__O__O__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_LNode__Z = (function(k$1, v$1, ct$1, x4$1) {
  var nn = x4$1.inserted__O__O__Lscala_collection_concurrent_LNode(k$1, v$1);
  return this.GCAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_TrieMap__Z(x4$1, nn, ct$1)
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.cleanReadOnly$1__p3__Lscala_collection_concurrent_TNode__O__I__I__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_TrieMap__O = (function(tn, k$2, hc$1, lev$1, parent$1, ct$2) {
  if (ct$2.nonReadOnly__Z()) {
    this.clean__p3__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_TrieMap__I__V(parent$1, ct$2, (lev$1 - 5));
    return ScalaJS.modules.scala_collection_concurrent_INodeBase().RESTART__O()
  } else {
    if (((tn.hc__I() === hc$1) && ScalaJS.anyEqEq(tn.k__O(), k$2))) {
      return tn.v__O()
    } else {
      return null
    }
  }
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.cleanParent$1__p3__O__I__I__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__V = (function(nonlive, hc$2, lev$2, parent$2, startgen$1, ct$3) {
  var _$this = this;
  tailCallLoop: while (true) {
    var pm = parent$2.GCAS$undREAD__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_MainNode(ct$3);
    var x1 = pm;
    matchEnd4: {
      if (ScalaJS.is.scala_collection_concurrent_CNode(x1)) {
        var x2 = ScalaJS.as.scala_collection_concurrent_CNode(x1);
        var idx = ((hc$2 >>> (lev$2 - 5)) & 31);
        var bmp = x2.bitmap__I();
        var flag = (1 << idx);
        if (((bmp & flag) === 0)) {
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd4
        } else {
          var pos = ScalaJS.modules.java_lang_Integer().bitCount__I__I((bmp & (flag - 1)));
          var sub = x2.array__ALscala_collection_concurrent_BasicNode().underlying[pos];
          if ((sub === _$this)) {
            var x1$2 = nonlive;
            if (ScalaJS.is.scala_collection_concurrent_TNode(x1$2)) {
              var x2$2 = ScalaJS.as.scala_collection_concurrent_TNode(x1$2);
              var ncn = x2.updatedAt__I__Lscala_collection_concurrent_BasicNode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_CNode(pos, x2$2.copyUntombed__Lscala_collection_concurrent_SNode(), _$this.gen$f).toContracted__I__Lscala_collection_concurrent_MainNode((lev$2 - 5));
              if ((!parent$2.GCAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_TrieMap__Z(x2, ncn, ct$3))) {
                if (ScalaJS.anyRefEqEq(ct$3.readRoot__Z__Lscala_collection_concurrent_INode(ct$3.readRoot$default$1__Z()).gen$f, startgen$1)) {
                  continue tailCallLoop;
                  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
                  break matchEnd4
                } else {
                  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
                  break matchEnd4
                }
              } else {
                ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
                break matchEnd4
              }
            };
            throw new ScalaJS.c.scala_MatchError().init___O(x1$2)
          } else {
            ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
            break matchEnd4
          }
        }
      };
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd4
    };
    return undefined
  }
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.init___Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_Gen = (function(bn, g) {
  ScalaJS.c.scala_collection_concurrent_INodeBase.prototype.init___Lscala_collection_concurrent_Gen.call(this, g);
  this.WRITE__Lscala_collection_concurrent_MainNode__V(bn);
  return this
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.init___Lscala_collection_concurrent_Gen = (function(g) {
  ScalaJS.c.scala_collection_concurrent_INode.prototype.init___Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_Gen.call(this, null, g);
  return this
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.cachedSize__Lscala_collection_concurrent_TrieMap__ = (function(ct) {
  return ScalaJS.bI(this.cachedSize__Lscala_collection_concurrent_TrieMap__I(ct))
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.isNullInode__Lscala_collection_concurrent_TrieMap__ = (function(ct$2) {
  return ScalaJS.bZ(this.isNullInode__Lscala_collection_concurrent_TrieMap__Z(ct$2))
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.rec$undremove__O__O__I__I__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__ = (function(k, v, hc, lev, parent, startgen, ct$3) {
  return this.rec$undremove__O__O__I__I__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__Lscala_Option(k, v, hc, lev, parent, startgen, ct$3)
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.rec$undlookup__O__I__I__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__ = (function(k$2, hc$2, lev$2, parent$2, startgen$2, ct$4) {
  return this.rec$undlookup__O__I__I__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__O(k$2, hc$2, lev$2, parent$2, startgen$2, ct$4)
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.rec$undinsertif__O__O__I__O__I__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__ = (function(k$3, v$2, hc$3, cond, lev$3, parent$3, startgen$3, ct$5) {
  return this.rec$undinsertif__O__O__I__O__I__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__Lscala_Option(k$3, v$2, hc$3, cond, lev$3, parent$3, startgen$3, ct$5)
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.rec$undinsert__O__O__I__I__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__ = (function(k$4, v$3, hc$4, lev$4, parent$4, startgen$4, ct$6) {
  return ScalaJS.bZ(this.rec$undinsert__O__O__I__I__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__Z(k$4, v$3, hc$4, lev$4, parent$4, startgen$4, ct$6))
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.copyToGen__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__ = (function(ngen, ct$7) {
  return this.copyToGen__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_INode(ngen, ct$7)
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.GCAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_TrieMap__ = (function(old, n, ct$8) {
  return ScalaJS.bZ(this.GCAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_TrieMap__Z(old, n, ct$8))
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.GCAS$undREAD__Lscala_collection_concurrent_TrieMap__ = (function(ct$9) {
  return this.GCAS$undREAD__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_MainNode(ct$9)
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.gcasRead__Lscala_collection_concurrent_TrieMap__ = (function(ct$10) {
  return this.gcasRead__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_MainNode(ct$10)
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.CAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__ = (function(old$2, n$2) {
  return ScalaJS.bZ(this.CAS__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_MainNode__Z(old$2, n$2))
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.WRITE__Lscala_collection_concurrent_MainNode__ = (function(nval) {
  return ScalaJS.bV(this.WRITE__Lscala_collection_concurrent_MainNode__V(nval))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_concurrent_INode = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_concurrent_INode.prototype = ScalaJS.c.scala_collection_concurrent_INode.prototype;
ScalaJS.is.scala_collection_concurrent_INode = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_concurrent_INode)))
});
ScalaJS.as.scala_collection_concurrent_INode = (function(obj) {
  if ((ScalaJS.is.scala_collection_concurrent_INode(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.concurrent.INode")
  }
});
ScalaJS.isArrayOf.scala_collection_concurrent_INode = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_concurrent_INode)))
});
ScalaJS.asArrayOf.scala_collection_concurrent_INode = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_concurrent_INode(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.concurrent.INode;", depth)
  }
});
ScalaJS.data.scala_collection_concurrent_INode = new ScalaJS.ClassTypeData({
  scala_collection_concurrent_INode: 0
}, false, "scala.collection.concurrent.INode", ScalaJS.data.scala_collection_concurrent_INodeBase, {
  scala_collection_concurrent_INode: 1,
  scala_collection_concurrent_INodeBase: 1,
  scala_collection_concurrent_BasicNode: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_concurrent_INode.prototype.$classData = ScalaJS.data.scala_collection_concurrent_INode;
//@ sourceMappingURL=INode.js.map
